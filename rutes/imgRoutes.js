const express = require(`express`)
const router = express.Router()
const { imgsController, imgController, createImgController, deleteImgController } = require('../controllers/imgControllers');

const multer = require('multer');
const upload = multer({dest: 'skiImg/'});

router.get('/', imgsController)
router.get('/:key', imgController)
router.post('/', upload.single('image'), createImgController)
router.delete('/:path', deleteImgController)

module.exports = router