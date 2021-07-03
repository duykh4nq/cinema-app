const e = require("express");
const { Op, QueryTypes, NOW, DATE } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../configs/db");
require("dotenv").config();
const uuid = require("uuid");
const moment = require("moment");

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
  Movies_Cineplex,
} = require("../models/cineplex_room.model");

exports.getCinema = async (req, res, next) => {
  const cineplex = await Cineplexs.findAll();
  const category_room = await Category_rooms.findAll();
  res.status(200).send(cineplex);
};

exports.getSchedule = async (req, res, next) => {
  const schedule = await Cineplexs.findAll({
    include: [
      {
        model: Rooms,
        include: [
          {
            model: Category_rooms,
          },
        ],
      },
      {
        model: Movies,
      },
    ],
  });
  res.status(200).send(schedule);
};

exports.postAddCineplex = async (req, res, next) => {
  let { name, address } = req.body;
  await Cineplexs.create({
    name: name,
    address: address,
  });
  res.status(200).send({ message: "Ok" });
};

exports.postAddRoom = async (req, res, next) => {
  try {
    let { id_cineplex, name_room, horizontal, vertical, id_categoryRoom } =
      req.body;
    name_room = name_room.toString().replace(/\s+/g, " ").trim();
    const roomExists = await Rooms.findOne({
      where: { id_cineplex: id_cineplex, name_room: name_room },
    });
    if (roomExists !== null)
      return res.status(200).send({ message: "Room is exist" });
    await Rooms.create({
      name_room: name_room,
      id_cineplex: id_cineplex,
      id_category_room: id_categoryRoom,
      horizontal_size: horizontal,
      vertical_size: vertical,
    });

    return res.status(200).send({ message: "OK" });
  } catch (err) {
    console.log(err);
    return res.status(404).send("er");
  }
};

function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  //     We can also use this instead of from line 11 to line 17
  //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
  //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
  //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
  //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
  //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
  //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
  //     str = str.replace(/\u0111/g, "d");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

exports.postAddMovie = async (req, res, next) => {
  try {
    let { id_cineplex, name_movie, time, release_date, poster } = req.body;
    if (id_cineplex === undefined) return res.status(200).send("All");
    name_movie = name_movie.toString().replace(/\s+/g, " ").trim();
    let slug = nonAccentVietnamese(name_movie).split(" ").join("-");

    const existsMovie = await db.query(
      `
    select mo.*
    from movies as mo join movies_cineplexs mc on mo.id = mc.id_movie
    where mo.name_movie = '${name_movie}' and mc.id_cineplex = ${id_cineplex}
  `,
      { type: QueryTypes.SELECT }
    );

    if (Object.keys(existsMovie).length !== 0) {
      return res.send({ message: "Movie is exists" });
    }

    let tt = await Movies.create({
      name_movie: name_movie,
      slug: slug,
      release_date: Date.parse(release_date),
      poster: poster,
      time: time,
    });
    tt = JSON.parse(JSON.stringify(tt));
    const id_movie = tt["id"];

    await Movies_Cineplex.create({
      id_cineplex: id_cineplex,
      id_movie: id_movie,
    });
    return res.status(200).send({ message: "Ok" });
  } catch (err) {
    console.log(err);
    return res.status(404).send("er");
  }
};

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
  var time = hour + ":" + min + ":" + sec;
  return time;
}

function compareTime(timeInput, timeDB, flag) {
  let time1 = timeInput.slice(0, 6).split(":");
  let time2 = timeDB.slice(0, 6).split(":");

  let minutesInput = parseInt(time1[0] * 60) + parseInt(time1[1]);
  if (flag === "PM") minutesInput += 12 * 60;
  let minutesDb = parseInt(time2[0] * 60) + parseInt(time2[1]);
  console.log(minutesInput);
  console.log(minutesDb + 15);
  return minutesInput >= minutesDb + 15;
}

function timeConvert(timeInput) {
  var num = timeInput;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);

  if (rminutes === 0) rminutes = "00";
  return rhours + ":" + rminutes;
}

function timeConvertMinutesToHours(timeInput, flag, movieTime) {
  let time1 = timeInput.slice(0, 5).split(":");
  console.log(time1);

  let minutesInput = parseInt(time1[0] * 60) + parseInt(time1[1]) + movieTime;
  if (flag === "PM") minutesInput += 12 * 60;

  var num = minutesInput;
  var hours = num / 60;

  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  let fa = false;

  if (rhours >= 24) {
    fa = true;
    rhours %= 24;
  }
  if (rminutes === 0) rminutes = "00";
  return { flagg: fa, time: rhours + ":" + rminutes };
}

function getDateWithoutTime(date) {
  return require("moment")(date).format("MM/DD/YYYY");
}

exports.postAddShedule = async (req, res, next) => {
  let { id_room, id_movie, date, start_time, price } = req.body;
  const start_time_last = start_time.slice(6, 8); // cut last AM or PM

  console.log(id_movie);
  const movie = await Movies.findOne({ where: { id: id_movie } });

  const times = await db.query(
    `
    select time.end_point
    from schedules sch join times time on sch.id_time = time.id
    where sch.id_movie = ${id_movie} and sch.id_room = ${id_room}  and time.start_point::date = '${date}'
    order by time.end_point DESC
    limit 1
  `,
    { type: QueryTypes.SELECT }
  );

  // get end_point
  if (Object.keys(times).length !== 0) {
    if (date < getDateWithoutTime(times[0].end_point)) {
      return res.status(200).send({
        message: "Invalid",
      });
    }
    const end_time = timeConverter(times[0].end_point);
    // compare
    console.log(end_time);

    if (!compareTime(start_time, end_time, start_time_last)) {
      return res.status(200).send({
        message:
          "Time Start of schedule greater time of schedule previous 15 minutes",
      });
    }
  }

  // plus time start with time of movie => end_time
  const { flagg, time } = timeConvertMinutesToHours(
    start_time,
    start_time_last,
    movie.time
  );

  // convert start time to time exact
  let time1 = start_time.slice(0, 5).split(":");
  let minutesInput = parseInt(time1[0] * 60) + parseInt(time1[1]);
  if (start_time_last === "PM") minutesInput += 12 * 60;

  const dateTimeStart = date + " " + timeConvert(minutesInput);
  let start_time_db = new Date(dateTimeStart);
  // end_time
  const dateTimeEnd = date + " " + time;

  let end_time_db = new Date(dateTimeEnd);
  if (flagg === true) {
    end_time_db = new Date(end_time_db.getTime() + 24 * 60 * 60 * 1000);
  }

  let tt = await Times.create({
    start_point: start_time_db.toISOString(),
    end_point: end_time_db.toISOString(),
  });

  tt = JSON.parse(JSON.stringify(tt));
  const id_time = tt["id"];
  await Schedules.create({
    id_movie: id_movie,
    id_room: id_room,
    id_time: id_time,
    price: price,
  });

  return res.status(200).send("ok");
};

exports.postStatiscalForCineplex = async (req, res, next) => {
  const { start, end } = req.body;

  const statiscalForCineplex = await db.query(
    `
    select cine.name, Sum(bk.total), Count(*)
    from cineplexs as cine join rooms as ro on cine.id = ro.id_cineplex
    join schedules as sche on ro.id = sche.id_room
    join bookings as bk on bk.id_schedule = sche.id
    join tickets as tk on tk.id_booking = bk.id
    where bk.created_at::date >= '${start}' and bk.created_at::date <= '${end}'
    group by cine.name
  `,
    { type: QueryTypes.SELECT }
  );

  res.status(200).send({
    statiscalForCineplex,
  });
};

exports.postStatiscalForMovie = async (req, res, next) => {
  const { start, end } = req.body;

  const statiscalForMovie = await db.query(
    `
    select mo.name_movie, sum(bk.total), count(*)
    from movies as mo join schedules as sche on mo.id = sche.id_movie
    join bookings as bk on bk.id_schedule = sche.id
    join tickets as tk on tk.id_booking = bk.id
    where bk.created_at::date >= '${start}' and bk.created_at::date <= '${end}'
    group by mo.name_movie
  `,
    { type: QueryTypes.SELECT }
  );

  res.status(200).send({
    statiscalForMovie,
  });
};
