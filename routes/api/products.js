const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/products');

const { validateBody } = require('../../middlewares');

const { ctrlWrapper } = require('../../helpers');

const { schemas } = require('../../models/product');

router.get('/', ctrlWrapper(ctrl.getAllProductsBySelect));

router.post(
  '/',
  validateBody(schemas.addProductSchema),
  ctrlWrapper(ctrl.addProduct)
);

module.exports = router;
