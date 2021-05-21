const express = require("express");
const router = express.Router();

const Admin = require("../controllers/admin.controller");

router.get("/admin/cinema", Admin.getCinema); // use for cineplex, movie
router.get("/admin/schedule", Admin.getSchedule); // use for showtime

router.post("/admin/addcineplex", Admin.postAddCineplex);

router.get("/admin/statiscal", Admin.getStatiscal);

module.exports = router;
