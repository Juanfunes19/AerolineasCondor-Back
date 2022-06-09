const express = require(`express`)
const router = express.Router()
const enviomail = require (`../controllers/emailsControllers`)

router.post(`/`, enviomail.emailControllers )


module.exports = router