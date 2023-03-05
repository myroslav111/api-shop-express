const { Review } = require('../../models/review');

const getAllReviews = async (req, res) => {
    const result = await Review.find();
    res.status(200).json(result);
};

module.exports = getAllReviews;
