const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/products');

router.get('/', ctrl.getAllProducts);

module.exports = router;
