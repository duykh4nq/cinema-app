const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./configs/db");
const cookieSession = require("cookie-session");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY || "secret"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

const { Movies } = require("./models/movies.model");
const { Cineplexs, Movies_Cineplex } = require("./models/cineplex_room.model");

const Home = require("./routes/homepage");
const Auth = require("./routes/auth.route");
const Admin = require("./routes/admin.route");

app.use(Home);
app.use(Auth);
app.use(Admin);

app.use("*", (req, res) => {
  res.status(404).json({
    error: "NotFound",
  });
});

const hostname = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
