const Sequelize = require("sequelize");
const db = require("../configs/db");

const Bookings = db.define("bookings", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
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
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
});

module.exports = { Bookings };
