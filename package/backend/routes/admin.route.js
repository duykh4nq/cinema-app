const express = require("express");
const router = express.Router();

const Admin = require("../controllers/admin.controller");

router.get("/admin/cinema", Admin.getCinema); // use for cineplex
router.get("/admin/schedule", Admin.getSchedule); // use for showtime
router.get("/admin/movies", Admin.getMovies); // use for add movies

router.post("/admin/addcineplex", Admin.postAddCineplex);
router.post("/admin/addroom", Admin.postAddRoom);
router.post("/admin/addmovie", Admin.postAddMovie);
router.post("/admin/addshedule", Admin.postAddShedule);

router.post("/admin/statiscalCineplex", Admin.postStatiscalForCineplex);
router.post("/admin/statiscalMovie", Admin.postStatiscalForMovie);

module.exports = router;
