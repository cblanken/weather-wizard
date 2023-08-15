const express = require("express")
const router = express.Router()
const apiController = require("../controllers/api")

router.get("/api/data", apiController.getForecast)

module.exports = router