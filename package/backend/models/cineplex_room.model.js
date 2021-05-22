const Sequelize = require("sequelize");
const db = require("../configs/db");

const { Schedules } = require("./schedules.model");
const { Movies } = require("./movies.model");

const Cineplexs = db.define(
  "cineplexs",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

const Rooms = db.define(
  "rooms",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_room: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_cineplex: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    id_category_room: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    horizontal_size: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    vertical_size: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

const Category_rooms = db.define(
  "category_rooms",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_cat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Movies_Cineplex = db.define(
  "movies_cineplexs",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_movie: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    id_cineplex: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

Rooms.hasMany(Schedules, { foreignKey: "id_room" });
Schedules.belongsTo(Rooms, { foreignKey: "id_room" });

Cineplexs.hasMany(Rooms, { foreignKey: "id_cineplex" });
Rooms.belongsTo(Cineplexs, { foreignKey: "id_cineplex" });

Category_rooms.hasMany(Rooms, { foreignKey: "id_category_room" });
Rooms.belongsTo(Category_rooms, { foreignKey: "id_category_room" });

Movies.belongsToMany(Cineplexs, {
  through: Movies_Cineplex,
  foreignKey: "id_movie",
});
Cineplexs.belongsToMany(Movies, {
  through: Movies_Cineplex,
  foreignKey: "id_cineplex",
});

module.exports = { Cineplexs, Rooms, Category_rooms, Movies_Cineplex };
