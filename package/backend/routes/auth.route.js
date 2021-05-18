const express = require("express");
const router = express.Router();

const Auth = require("../controllers/auth.controller");

// validator
const validator = require("../validators/auth");

router.post("/signup", Auth.postSignup);
router.post("/verify", Auth.postVerify);
router.post("/signin", Auth.postSignin);
router.post("/logout", Auth.postLogout);
router.post("/forgotpassword", Auth.postForgotPassword);
router.post("/verifycoderesetpass", Auth.postVerifyCodeResetPass);
router.post("/resetpassword", Auth.postResetPassword);
router.post("/changeprofile", Auth.postChangeProfile);
router.get("/historybooking", Auth.getHistoryBooking);
router.post("/payment", Auth.postPayment);

module.exports = router;
