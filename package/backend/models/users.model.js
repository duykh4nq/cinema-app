const Sequelize = require("sequelize");
const db = require("../configs/db");

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.INTEGER, // admin = 0, customer = 1 (default)
      allowNull: false,
    },
    active: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    verifyCode: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Users };
