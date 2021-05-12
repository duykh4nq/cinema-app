const Sequelize = require("sequelize");
const db = require("../configs/db");

const Movies = db.define("movies", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name_movie: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  release_date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  poster: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: true,
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

module.exports = { Movies };
