const { Product } = require('../../models/product');

const getAllProductsBySelect = async (req, res) => {
  const typeSelect = req.query.type;

  switch (typeSelect) {
    case 'newest': {
      const productsNewest = await Product.find()
        .sort({ createdAt: -1 })
        .populate('reviews');
      res.status(200).json(productsNewest);
      break;
    }

    case 'oldest': {
      const productsOldest = await Product.find()
        .sort({ createdAt: 1 })
        .populate('reviews');
      res.status(200).json(productsOldest);
      break;
    }

    case 'low-to-hight': {
      const productsLowToHight = await Product.find()
        .sort({ price: 1 })
        .populate('reviews');
      res.status(200).json(productsLowToHight);
      break;
    }

    case 'hight-to-low': {
      const productsHightToLow = await Product.find()
        .sort({ price: -1 })
        .populate('reviews');
      res.status(200).json(productsHightToLow);
      break;
    }

    default: {
      const products = await Product.find().populate('reviews');
      res.status(200).json(products);
      break;
    }
  }
};

module.exports = getAllProductsBySelect;
