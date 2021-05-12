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
  }
);
