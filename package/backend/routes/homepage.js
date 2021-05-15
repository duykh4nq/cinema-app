const express = require("express");
const router = express.Router();

const tes = require("../controllers/home");

router.get("/", tes.getHome);

module.exports = router;
