const express = require(`express`)
const multer = require('multer')
const router = express.Router()
const molter = require('multer')
const upload = multer({dest: 'imagenes/'})
const {allVuelosControllers, idVuelosControllers, deleteVuelosControllers, createVuelosControllers, updateVuelosControllers} = require(`../controllers/vuelosControllers`)


router.get(`/`, allVuelosControllers)
router.get(`/:id`, idVuelosControllers)
router.post(`/`,upload.single('imagen'), createVuelosControllers)
router.put(`/:id`, updateVuelosControllers)
router.delete(`/:id`, deleteVuelosControllers)



module.exports = router