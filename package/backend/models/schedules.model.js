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
    },
    id_room: {
      type: Sequelize.INTEGER,
    },
    id_time: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

const Times = db.define(
  "times",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_point: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_point: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Schedules.hasMany(Bookings, { foreignKey: "id_schedule" });
Bookings.belongsTo(Schedules, { foreignKey: "id_schedule" });

Times.hasOne(Schedules, { foreignKey: "id_time" });
Schedules.belongsTo(Times, { foreignKey: "id_time" });

module.exports = { Schedules, Times };
