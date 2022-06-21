const express = require(`express`)
const router = express.Router()
const {allVuelosControllers, idVuelosControllers, deleteVuelosControllers, createVuelosControllers, updateVuelosControllers} = require(`../controllers/vuelosControllers`)


router.get(`/`, allVuelosControllers)
router.get(`/:id`, idVuelosControllers)
router.post(`/` , createVuelosControllers)
router.put(`/:id`, updateVuelosControllers)
router.delete(`/:id`, deleteVuelosControllers)



module.exports = router