const express = require(`express`)
const router = express.Router()
const { allAdminControllers, createAdminControllers } = require("../controllers/adminControllers")


router.get(`/` , allAdminControllers)
router.post(`/` , createAdminControllers)



module.exports = router
