const { Product } = require('../../models/product');

const getAllProducts = async (req, res) => {
  const result = await Product.find();
  res.status(200).json(result);
};

module.exports = getAllProducts;
