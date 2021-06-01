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

// Mail
const MailService = require("../services/mail");

exports.postSignup = async (req, res, next) => {
  let { password, email, name, phone, role } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000);
  try {
    const userExists = await Users.findOne({ where: { email: email } });
    // check exists user
    if (userExists)
      return res.status(403).send({
        error: "Email is taken by another account.",
      });
    if (role === undefined) role = 1;
    const newUser = await Users.create({
      email: email,
      password: bcrypt.hashSync(password, 12),
      name: name,
      phone: phone,
      role: role,
      active: code,
    });
    if (newUser) {
      req.session.code = code.toString();
      req.session.email = newUser.email;
      await MailService.sendMail(email, code);
      return res
        .status(200)
        .send({ message: "Success", code: code.toString() });
    } else {
      return res.status(400).send({ error: "Fail!!!!" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Fail" });
  }
};

exports.postVerify = async (req, res, next) => {
  const { code } = req.body;
  const email = req.session.email;

  const user = await Users.findOne({
    where: {
      email: email,
      active: code,
    },
  });
  if (user === null) {
    return res.status(404).send({ message: "Your account is verified" });
  } else {
    user.active = null;
    await user.save();
    return res.status(200).send({ message: "Verified success" });
  }
};

exports.postSignin = async (req, res, next) => {
  const { email, password, role } = req.body;
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(401).send({
      message: "Email does not exist",
    });
  }
  await bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { id, email, name, phone, active } = user;
      req.session.email = email;
      return res.status(200).send({
        accessToken: token,
        user: { id, email, name, phone, active },
      });
    } else {
      return res.status(401).send({ message: "Password wrong!" });
    }
  });
};

exports.postLogout = async (req, res, next) => {
  req.session = null;
  return res.status(200).send({ message: "Logout success" });
};

exports.postForgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000);
  try {
    const userExists = await Users.findOne({ where: { email: email } });
    // check exists user
    if (!userExists)
      return res.status(403).send({
        error: "Email is not exists",
      });
    await MailService.sendMail(email, code);
    req.session.codeverify = code.toString();
    req.session.email = email;
    return res
      .status(200)
      .send({ message: "Success", codeverify: code.toString() });
  } catch (error) {
    return res.status(400).send({ error: "Fail" });
  }
};

exports.postVerifyCodeResetPass = async (req, res, next) => {
  const { code } = req.body;
  const email = req.session.email;
  const codeverify = req.session.codeverify;

  if (code != codeverify) {
    return res.status(403).send({ message: "Code not match" });
  } else {
    return res.status(200).send({ message: "OK" });
  }
};

exports.postResetPassword = async (req, res, next) => {
  const email = req.session.email;
  const { password } = req.body;

  const user = await Users.findOne({ where: { email: email } });
  user.password = bcrypt.hashSync(password, 12);
  await user.save();
  return res.status(200).send({ message: "Change password successfully" });
};

exports.postChangeProfile = async (req, res, next) => {
  const { password, name, phone } = req.body;
  const email = req.session.email;
  console.log(email);
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  user.password = bcrypt.hashSync(password, 12);
  user.name = name;
  user.phone = phone;
  await user.save();
  return res.status(200).send({ message: "Update success" });
};

exports.getHistoryBooking = async (req, res, next) => {
  const email = req.session.email;
  const user = await Users.findOne({ where: { email } });
  const test = await Bookings.findAll({
    where: {
      id_user: {
        [Op.eq]: user.id,
      },
    },
    include: [
      {
        model: Tickets,
        attributes: ["seat", "price_ticket"],
      },
      {
        model: Schedules,
        attributes: ["id_movie", "id_cineplex"],
        include: [
          {
            model: Movies,
            attributes: ["name_movie", "poster", "time"],
          },
          {
            model: Cineplexs,
            attributes: ["name", "address"],
            include: [
              {
                model: Rooms,
                attributes: ["name_room"],
              },
            ],
          },
        ],
      },
    ],
  });
  return res.status(200).send(test);
  // // convert to date
  // const date = new Date(test[0].createdAt);
  // console.log(
  //   "Date: " +
  //     date.getDate() +
  //     "/" +
  //     (date.getMonth() + 1) +
  //     "/" +
  //     date.getFullYear() +
  //     " " +
  //     date.getHours() +
  //     ":" +
  //     date.getMinutes() +
  //     ":" +
  //     date.getSeconds()
  // );
};

exports.postPayment = async (req, res, next) => {
  const { id_schedule, total, seat } = req.body;
  const email = req.session.email || "ducga079099@gmail.com";
  const user = await Users.findOne({
    where: {
      email,
    },
    attributes: ["id"],
  });

  const uuidBooking = uuid.v4();
  await Bookings.create({
    id: uuidBooking,
    id_user: user.id,
    id_schedule: id_schedule,
    total: total,
  });

  const price_ticket = parseInt(total) / seat.length;
  for (let i = 0; i < seat.length; i++) {
    const uuidTicket = uuid.v4();
    await Tickets.create({
      id: uuidTicket,
      id_booking: uuidBooking,
      seat: seat[i],
      price_ticket: price_ticket,
    });
  }

  res.status(200).send({ message: "success" });
};

function getDateWithoutTime(date) {
  return require("moment")(date).format("YYYY-MM-DD");
}
