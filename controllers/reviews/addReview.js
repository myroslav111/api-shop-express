const { Review } = require('../../models/review');

const addReview = async (req, res) => {
    const result = await Review.create({ ...req.body });
    res.status(201).json(result);
};


module.exports = addReview;