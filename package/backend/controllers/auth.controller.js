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
const { Cineplexs, Rooms, Category_rooms } = require("../models/cineplex_room.model");

// Mail
const MailService = require("../services/mail");

exports.postSignup = async (req, res, next) => {
  let { password, email, name, phone } = req.body;
  console.log("🚀 ~ file: auth.controller.js ~ line 29 ~ password", password, email, name, phone);

  const code = Math.floor(100000 + Math.random() * 900000);
  try {
    const userExists = await Users.findOne({ where: { email: email } });

    // check exists user

    if (userExists) {
      return res.status(403).send({
        error: "Email is taken by another account.",
      });
    }
    const newUser = await Users.create({
      email: email,
      password: bcrypt.hashSync(password, 12),
      name: name,
      phone: phone,
      role: 1,
      active: code,
    });
    if (newUser) {
      await MailService.sendMail(email, code);
      return res.status(200).send({ message: "Success", code: code.toString() });
    } else {
      return res.status(400).send({ error: "Fail!!!!" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Fail" });
  }
};

exports.postVerify = async (req, res, next) => {
  const { code, email } = req.body;

  const user = await Users.findOne({
    where: {
      email: email,
      active: code,
    },
  });
  if (user === null) {
    return res.status(404).send({ message: "Verified Fail" });
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
      role: role,
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
      const { id, email, name, phone, active, role } = user;
      req.session.email = email;
      return res.status(200).send({
        accessToken: token,
        user: { id, email, name, phone, active, role },
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
    userExists.verifyCode = code;
    await userExists.save();
    return res.status(200).send({ message: "Success Forgot", codeverify: code.toString() });
  } catch (error) {
    return res.status(400).send({ error: "Fail" });
  }
};

exports.postVerifyCodeResetPass = async (req, res, next) => {
  const { code, email } = req.body;
  const user = await Users.findOne({
    where: {
      email: email,
      verifyCode: code,
    },
  });

  if (user !== null) {
    user.verifyCode = null;
    await user.save();
    return res.status(200).send({ message: "Success Verified Forgot" });
  } else {
    return res.status(403).send({ message: "Code not match" });
  }
};

exports.postResetPasswordForgot = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email: email } });
  user.password = bcrypt.hashSync(password, 12);
  await user.save();
  return res.status(200).send({ message: "Change password successfully" });
};

exports.postResetPassword = async (req, res, next) => {
  const { email, oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { email: email } });

  bcrypt.compare(oldPassword, user.password, async (err, data) => {
    //if error than throw error
    if (err) throw err;

    //if both match than you can do anything
    if (data) {
      user.password = bcrypt.hashSync(newPassword, 12);
      await user.save();
      return res.status(200).send({ user, message: "Change password successfully" });
    } else {
      console.log("🚀 ~ file: auth.controller.js ~ line 159 ~ bcrypt.compare ~ false", err, data);
      return res.status(403).send({ message: "Invalid credencial" });
    }
  });
};

exports.postChangeProfile = async (req, res, next) => {
  const { email, name, phone } = req.body;
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  user.name = name;
  user.phone = phone;
  await user.save();
  return res.status(200).send({ message: "Update success" });
};

exports.getHistoryBooking = async (req, res, next) => {
  const { email } = req.body;
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
};

exports.postPayment = async (req, res, next) => {
  const { email, id_schedule, total, seat } = req.body;
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

  const bookingInfo = await db.query(
    `select mo.name_movie, r.name_room, cr.name_cat, ti.start_point, ti.end_point
    from schedules sch join rooms r on sch.id_room = r.id
    join category_rooms cr on r.id_category_room = cr.id
    join times ti on sch.id_time = ti.id
    join movies mo on mo.id = sch.id_movie
    where sch.id = ${id_schedule}`,
    { type: QueryTypes.SELECT }
  );

  const price_ticket = parseInt(total) / seat.length;
  const listIdTickets = [];
  console.log(seat.length);
  for (let i = 0; i < seat.length; i++) {
    const uuidTicket = uuid.v4();
    listIdTickets.push(uuidTicket);
    await Tickets.create({
      id: uuidTicket,
      id_booking: uuidBooking,
      seat: seat[i].toString(),
      price_ticket: price_ticket,
    });
  }

  await MailService.sendMailBookingSuccess(email, {
    listIdTickets,
    info: bookingInfo[0],
  });
  //return res.send({ listIdTickets, info: bookingInfo[0] });
  res.status(200).send({ message: "success" });
};
