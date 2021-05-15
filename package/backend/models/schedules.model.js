const Sequelize = require("sequelize");
const db = require("../configs/db");
const { Bookings } = require("./bookings.model");

const Schedules = db.define(
  "schedules",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_movie: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_cineplex: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_time: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Schedules.hasMany(Bookings, { foreignKey: "id_schedule" });
Bookings.belongsTo(Schedules, { foreignKey: "id_schedule" });

module.exports = { Schedules };
