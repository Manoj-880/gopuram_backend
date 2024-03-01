const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const multer = require('multer');
const path = require('path');
const Constants = require('../constants');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, Constants.directoryPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

// routes
router.post('/add',upload.single('image'), galleryController.add);
router.get('/', galleryController.getAll);
router.delete('/delete/:id', galleryController.deleteImage);

module.exports = router;