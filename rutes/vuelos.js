const express = require(`express`)
const router = express.Router()
const {allVuelosControllers, idVuelosControllers, deleteVuelosControllers, createVuelosControllers, updateVuelosControllers} = require(`../controllers/vuelosControllers`)

const multer = require('multer');
const upload = multer({dest: 'skiImg/'});

router.get(`/`, allVuelosControllers)
router.get(`/:id`, idVuelosControllers)
router.post(`/`,upload.single('imagen'), createVuelosControllers)
router.put(`/:id`, updateVuelosControllers)
router.delete(`/:id`, deleteVuelosControllers)



module.exports = router