const express = require(`express`)
const router = express.Router()
const {allVuelosControllers, idVuelosControllers, deleteVuelosControllers, createVuelosControllers, updateVuelosControllers, getImagen} = require(`../controllers/vuelosControllers`)

const multer = require('multer');
const upload = multer({dest: 'skiImg/'});

router.get(`/`, allVuelosControllers)
router.get(`/:id`, idVuelosControllers)
router.get(`/img/:path`, getImagen)
router.post(`/`,upload.single('imagen'), createVuelosControllers)
router.put(`/:id`, updateVuelosControllers)
router.delete(`/:id`, deleteVuelosControllers)



module.exports = router