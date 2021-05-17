const Sequelize = require("sequelize");
const db = require("../configs/db");
const { Schedules } = require("./schedules.model");

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
  slug: {
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

Movies.hasMany(Schedules, { foreignKey: "id_movie" });
Schedules.belongsTo(Movies, { foreignKey: "id_movie" });

module.exports = { Movies };
