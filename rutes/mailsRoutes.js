const express = require(`express`)
const router = express.Router()
const {emailsControllers} = require (`../controllers/emailsControllers`)

router.post(`/`, emailsControllers )


module.exports = router