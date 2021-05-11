const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Model
const { Users } = require("../models/users.model");

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
  const { email, password } = req.body;
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(401).send({
      error: "Email does not exist",
    });
  }
  await bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { id, email, name, phone, active } = user;
      return res.status(200).send({
        accessToken: token,
        user: { id, email, name, phone, active },
      });
    } else {
      return res.status(401).send({ message: "Password wrong!" });
    }
  });
};
