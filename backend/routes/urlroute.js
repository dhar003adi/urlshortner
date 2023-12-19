const express = require('express')
const router = express.Router()
const authenticatetoken = require("../middleware/authenticatetoken")
const controllerurl = require("../controllers/urlController")

router.post("/",authenticatetoken,controllerurl.shortenUrl);

router.get("/:shortId",authenticatetoken,controllerurl.redirectcontroller)

module.exports = router