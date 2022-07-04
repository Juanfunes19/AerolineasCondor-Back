const express = require(`express`)
const router = express.Router()
const { reservaControllers } = require("../controllers/reservaControllers")
// const enviomail = require (`../controllers/emailsControllers`)

router.post(`/`, reservaControllers )


module.exports = router