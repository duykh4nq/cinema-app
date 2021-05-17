const { Op, QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../configs/db");
// Model
const { Users } = require("../models/users.model");
const { Bookings } = require("../models/bookings.model");
const { Movies } = require("../models/movies.model");
const { Schedules, Times } = require("../models/schedules.model");
const { Tickets } = require("../models/ticket.model");
const {
  Cineplexs,
  Rooms,
  Category_rooms,
} = require("../models/cineplex_room.model");

exports.getHome = async (req, res, next) => {
  const end = new Date();
  const start = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);

  const newest = await Movies.findAll({
    // new movie
    where: {
      release_date: {
        [Op.lte]: end.toISOString().slice(0, 10),
        [Op.gte]: start.toISOString().slice(0, 10),
      },
    },
    limit: 10,
    order: [["release_date"]],
  });

  const commingsoon = await Movies.findAll({
    // comming soon movie
    where: {
      release_date: {
        [Op.gt]: end.toISOString().slice(0, 10),
      },
    },
    limit: 10,
    order: [["release_date"]],
  });

  const bestSelling = await db.query(
    // best selling movie
    `
    SELECT *
    FROM MOVIES
    WHERE MOVIES.ID IN (SELECT Schedules.id_movie
                        FROM Bookings AS bookings, Schedules as schedules
                        WHERE schedules.id = bookings.id_schedule
                        GROUP BY Schedules.id_movie
                        ORDER BY SUM(bookings.total) DESC)
    AND (DATE_PART('day', Now()::timestamp - MOVIES.release_date::timestamp) BETWEEN 0 AND 7)            
    LIMIT 10;
  `,
    { type: QueryTypes.SELECT }
  );

  return res.status(200).send({
    newest,
    commingsoon,
    bestSelling,
  });
};

exports.getDetailMovie = async (req, res, next) => {
  const movie = req.params.movie;
  const mov = await Movies.findOne({
    where: {
      slug: movie,
    },
  });
  res.status(200).send(mov);
};

exports.postBookingShow = async (req, res, next) => {
  const { id_mov } = req.body;
  const start = new Date();
  const end = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

  const test1 = await Schedules.findAll({
    where: {
      id_movie: id_mov,
    },
    include: [
      {
        model: Rooms,
        include: [
          {
            model: Cineplexs,
          },
          {
            model: Category_rooms,
          },
        ],
      },
      {
        model: Times,
        where: {
          [Op.and]: [
            sequelize.where(
              sequelize.fn("date", sequelize.col("start_point")),
              ">=",
              start.toISOString().slice(0, 10)
            ),
            sequelize.where(
              sequelize.fn("date", sequelize.col("start_point")),
              "<=",
              end.toISOString().slice(0, 10)
            ),
          ],
        },
      },
    ],
  });

  return res.status(200).send(test1);
};

exports.postBookingSeat = async (req, res, next) => {
  const { id_schedule } = req.body;
  const booking = await Bookings.findAll({
    where: {
      id_schedule: id_schedule,
    },
    include: [
      {
        model: Tickets,
      },
    ],
  });
  res.status(200).send(booking);
};
