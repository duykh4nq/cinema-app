const express = require("express");
const router = express.Router();

const tes = require("../controllers/home");

router.get("/", tes.getHome);
router.get("/detail/:id_movie", tes.getDetailMovie);
router.post("/booking/now-showing", tes.postBookingShow);
router.post("/booking/seat", tes.postBookingSeat);
router.get("/allcineplexs", tes.getAllCineplexs);
router.post("/allmoviesbycineplexid", tes.postAllMoviesByCineplexId);

module.exports = router;
