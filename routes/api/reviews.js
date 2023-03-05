const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/reviews');

const { validateBody } = require('../../middlewares');

const { ctrlWrapper } = require('../../helpers');

const { schemas } = require('../../models/review');


router.get('/', ctrlWrapper(ctrl.getAllReviews));

router.post('/', validateBody(schemas.addReviewSchema), ctrlWrapper(ctrl.addReview));

module.exports = router;
