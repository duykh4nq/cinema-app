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

exports.postAddCineplex = async (req, res, next) => {
  const { name, address } = req.body;
  Cineplexs.create({
    name: name,
    address: address,
  });
  res.status(200).send("ok");
};

exports.getStatiscal = async (req, res, next) => {
  console.log("ok");
  const cineplex = await Cineplexs.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Rooms,
        attributes: ["id", "id_cineplex"],
        include: [
          {
            model: Schedules,
            attributes: ["id", "id_room"],
            include: [
              {
                model: Bookings,
                attributes: ["id", "id_schedule", "total", "createdAt"],
                include: [
                  {
                    model: Tickets,
                    attributes: ["id"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  console.log();

  const movie = await Movies.findAll({
    attributes: ["id", "name_movie"],
    include: [
      {
        model: Schedules,
        attributes: ["id", "id_room"],
        include: [
          {
            model: Bookings,
            attributes: ["id", "id_schedule", "total", "createdAt"],
            include: [
              {
                model: Tickets,
                attributes: ["id"],
              },
            ],
          },
        ],
      },
    ],
  });
  res.status(200).send({
    cineplex,
  });
};
