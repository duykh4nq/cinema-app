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

function getDateWithoutTime(date) {
  return require("moment")(date).format("YYYY-MM-DD");
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ":" + min;
  return time;
}

exports.getHome = async (req, res, next) => {
  const end = new Date();
  const start = new Date(new Date() - 30 * 24 * 60 * 60 * 1000);

  // phim A 20/6 <= 29
  // phim B 8/6 <= 29
  // phim C 10/7 phim sắp đc công chiếu
  const newest = await Movies.findAll({
    // new movie
    where: {
      release_date: {
        [Op.lte]: end.toISOString().slice(0, 10), // <=
        [Op.gte]: start.toISOString().slice(0, 10), // >=
      },
    },
    limit: 50,
    order: [["release_date", "DESC"]],
  });

  const commingsoon = await Movies.findAll({
    // comming soon movie
    where: {
      release_date: {
        [Op.gt]: end.toISOString().slice(0, 10), // >
      },
    },
    limit: 10,
    order: [["release_date"]],
  });

  const bestSelling = await db.query(
    // best selling movie
    `
    SELECT MOVIES.*
    FROM MOVIES
    WHERE MOVIES.ID IN (SELECT schedules.id_movie
                        FROM Bookings AS bookings, Schedules as schedules, Tickets ticket
                        WHERE schedules.id = bookings.id_schedule AND ticket.id_booking = bookings.id
                        GROUP BY schedules.id
                        ORDER BY COUNT(*) DESC)
    AND (DATE_PART('day', Now()::timestamp - MOVIES.release_date::timestamp) BETWEEN 0 AND 30)
    LIMIT 10
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

async function qery(id_mov, datee) {
  const test1 = await db.query(
    `
    select sch.id, cine.name, cr.name_cat, ti.start_point, ti.end_point
    from cineplexs cine join rooms ro on ro.id_cineplex = cine.id
    join category_rooms cr on cr.id = ro.id_category_room
    join schedules sch on sch.id_room = ro.id
    join times ti on ti.id = sch.id_time
    where sch.id_movie = ${id_mov} and ti.start_point::date = '${getDateWithoutTime(
      datee
    )}'
    group by sch.id, cine.name, cr.name_cat, ti.start_point, ti.end_point
    order by cine.name
    `,
    { type: QueryTypes.SELECT }
  );
  return test1;
}

function detailsCat(name_cat, id, start_point, end_point) {
  const res = {
    cate_room: name_cat,
    schedule: [
      {
        id_schedule: id,
        time_start: timeConverter(start_point),
        time_end: timeConverter(end_point),
      },
    ],
  };
  return res;
}

function converData(arr) {
  let details = [];
  for (let ko of arr) {
    const existsCineplex = details.find((de) => de.cineplex === ko.name);
    // if not exists
    if (existsCineplex === undefined) {
      const ttkk = {
        cineplex: ko.name,
        detailsCat: [
          {
            cate_room: ko.name_cat,
            schedule: [
              {
                id_schedule: ko.id,
                time_start: timeConverter(ko.start_point),
                time_end: timeConverter(ko.end_point),
              },
            ],
          },
        ],
      };
      details.push(ttkk);
    } else {
      const existsDetailsCat = existsCineplex.detailsCat.find(
        (de) => de.cate_room === ko.name_cat
      );

      const indexCine = details.findIndex(
        (e) => e.cineplex === existsCineplex.cineplex
      );
      if (existsDetailsCat === undefined) {
        // cate_room undefined
        details[indexCine].detailsCat.push(
          detailsCat(ko.name_cat, ko.id, ko.start_point)
        );
      } else {
        // cate_room not undefined
        const indexSche = details[indexCine].detailsCat.findIndex(
          (e) => e.cate_room === ko.name_cat
        );
        details[indexCine].detailsCat[indexSche].schedule.push({
          id_schedule: ko.id,
          time_start: timeConverter(ko.start_point),
          time_end: timeConverter(ko.end_point),
        });
      }
    }
  }
  return details;
}

exports.postBookingShow = async (req, res, next) => {
  const { id_movie } = req.body;
  let booking = [];
  let i = 0;
  for (; i < 7; i++) {
    const start = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
    const arr = await qery(id_movie, start);

    const details = await converData(arr);
    await booking.push([
      {
        date: getDateWithoutTime(start),
        details: details,
      },
    ]);
  }
  return res.status(200).send(booking);
};

exports.postBookingSeat = async (req, res, next) => {
  const { id_schedule } = req.body;
  const bookings = await db.query(
    `select sch.id, ro.horizontal_size, ro.vertical_size, ti.seat, sch.price
    from schedules sch join rooms ro on ro.id = sch.id_room
    join bookings bo on sch.id = bo.id_schedule
    join tickets ti on ti.id_booking = bo.id
    where sch.id = ${id_schedule}`,
    { type: QueryTypes.SELECT }
  );

  let result = {};
  if (bookings.length === 0) {
    const existsBooking = await db.query(
      `select sch.id, ro.horizontal_size, ro.vertical_size, sch.price
      from schedules sch join rooms ro on ro.id = sch.id_room
      where sch.id = ${id_schedule}`,
      { type: QueryTypes.SELECT }
    );
    result = {
      id_schedule: existsBooking[0].id,
      horizontal_size: existsBooking[0].horizontal_size,
      vertical_size: existsBooking[0].vertical_size,
      price: existsBooking[0].price,
      sum_of_seat:
        (existsBooking[0].vertical_size.charCodeAt(0) - 64) *
        existsBooking[0].horizontal_size,
      empty_seat:
        (existsBooking[0].vertical_size.charCodeAt(0) - 64) *
          existsBooking[0].horizontal_size -
        existsBooking.length,
      exists_seat: 0,
      seats: [],
    };
  } else {
    result = {
      id_schedule: bookings[0].id,
      horizontal_size: bookings[0].horizontal_size,
      vertical_size: bookings[0].vertical_size,
      price: bookings[0].price,
      sum_of_seat:
        (bookings[0].vertical_size.charCodeAt(0) - 64) *
        bookings[0].horizontal_size,
      empty_seat:
        (bookings[0].vertical_size.charCodeAt(0) - 64) *
          bookings[0].horizontal_size -
        bookings.length,
      exists_seat: bookings.length,
      seats: [],
    };
    for (let item of bookings) {
      result.seats.push(item.seat.toString());
    }
  }
  res.status(200).send(result);
};
