const express = require(`express`)
const router = express.Router()
const {registerControlllers, loginControllers} = require(`../controllers/loginControllers`)

router.post(`/`, loginControllers)
router.post(`/register`, registerControlllers)

module.exports = router