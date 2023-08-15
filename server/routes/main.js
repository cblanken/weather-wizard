const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth") 
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.post("/login", ensureGuest, authController.postLogin)
router.get("/logout", ensureAuth, authController.logout)
router.post("/signup", ensureGuest, authController.postSignup)

module.exports = router
