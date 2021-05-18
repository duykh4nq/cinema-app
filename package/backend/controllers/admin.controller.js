const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const e = require("express");
const jwt = require("jsonwebtoken");
const { Op, QueryTypes, NOW, DATE } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../configs/db");
require("dotenv").config();
const uuid = require("uuid");
const QRCode = require("qrcode");

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

exports.getCinema = async (req, res, next) => {
  const cineplex = await Cineplexs.findAll();
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
    ],
  });
  res.status(200).send(schedule);
};
