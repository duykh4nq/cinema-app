const express = require("express");
const router = express.Router();

const tes = require("../controllers/home");

router.get("/", tes.getHome);
router.get("/detail/:movie", tes.getDetailMovie);

router.post("/booking/now-showing", tes.postBookingShow);
router.post("/booking/seat", tes.postBookingSeat);

module.exports = router;