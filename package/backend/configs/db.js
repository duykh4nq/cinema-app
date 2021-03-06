const Sequelize = require("sequelize");

module.exports = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:123@localhost:5432/cinema-app",
  {
    dialect: "postgres",
    protocol: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    dialectOptions: {
      useUTC: false, //for reading from database
    },
    timezone: "+07:00", //for writing to database
  }
);
