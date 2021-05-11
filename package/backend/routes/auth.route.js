const express = require("express");
const router = express.Router();

const Auth = require("../controllers/auth.controller");

// validator
const validator = require("../validators/auth");

router.post("/signup", Auth.postSignup);
router.post("/verify", Auth.postVerify);
router.post("/signin", Auth.postSignin);

module.exports = router;
