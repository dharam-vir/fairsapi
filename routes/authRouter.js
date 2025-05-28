const express = require('express');
const router = express.Router();
const authController = require("../controller/authController")


router.post("/", (req, res) => {
    res.send("check")
  })

router.post("/signup", authController.signup) 
router.post("/login",authController.signin)
router.post("/current",authController.current)
router.post("/getMe",authController.getMe)
router.post("/updateMe",authController.updateMe)
router.post("/refreshtokens",authController.refreshTokens)
// router.post("/send-verification-email",authController.sendVerificationEmail)
// router.post("/verify-email",authController.verifyEmail)
router.post("/forgot-password",authController.forgotPassword)
// router.post("/resetpassword",authController.resetPassword)
router.get("/logout",authController.logout)

module.exports = router