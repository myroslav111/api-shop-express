const express = require('express');
const uploadImage = require('../../controllers/uploadImage/uploadImage');

const router = express.Router();

router.post('/uploadImage', uploadImage);

module.exports = router;
