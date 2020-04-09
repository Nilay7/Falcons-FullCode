const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/picture.controller');
const multer = require('multer');
const auth = require('../middlewares/auth');

var storage = multer.diskStorage({ 
    destination: './uploads', 
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    } 
});

var upload = multer({ storage: storage });

router.post('/addpictures', auth, upload.array('multiple', 10), pictureController.uploadPicture);

router.get('/display/:filename', pictureController.displaypicture);

router.get('/displaybyevent/:event_id', pictureController.picturebyEvent);

module.exports = router;