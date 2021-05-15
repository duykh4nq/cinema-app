const Sequelize = require("sequelize");
const db = require("../configs/db");

const { Bookings } = require("./bookings.model");

const Tickets = db.define(
  "tickets",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    id_booking: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seat: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price_ticket: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Bookings.hasMany(Tickets, { foreignKey: "id_booking" });
Tickets.belongsTo(Bookings, { foreignKey: "id_booking" });
module.exports = { Tickets };
