const Sequelize = require("sequelize");
const db = require("../configs/db");

const Bookings = db.define(
  "bookings",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_schedule: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Bookings };
