const { Op, QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../configs/db");
// Model
const { Movies } = require("../models/movies.model");
const { Schedules } = require("../models/schedules.model");
const { Bookings } = require("../models/bookings.model");

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
