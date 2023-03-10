const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/products');

// const { validateBody } = require('../../middlewares');

const { ctrlWrapper } = require('../../helpers');

// const { schemas } = require('../../models/product');

router.get('/', ctrlWrapper(ctrl.getAllProductsBySelect));

router.get('/slug/:slug', ctrlWrapper(ctrl.getProductBySlug));

router.get('/relatives/:id', ctrlWrapper(ctrl.getRelativesProducts));

router.post(
  '/',

  ctrlWrapper(ctrl.addProduct)
);
//  validateBody(schemas.addProductSchema),
module.exports = router;
