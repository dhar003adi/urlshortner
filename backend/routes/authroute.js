const express = require('express')
const router = express.Router()
const authcontroller = require("../controllers/Authentication")

router.post("/signup",authcontroller.register)
router.post("/login",authcontroller.login)

module.exports = router