const express = require(`express`)
const router = express.Router()
const {allFilmsControllers, idFilmsControllers, deleteFilmsControllers, createFilmsControllers, updateFilmsControllers} = require(`../controllers/filmsControllers`)


router.get(`/`, allFilmsControllers)
router.get(`/:id`, idFilmsControllers)
router.post(`/`, createFilmsControllers)
router.put(`/:id`, updateFilmsControllers)
router.delete(`/:id`, deleteFilmsControllers)



module.exports = router