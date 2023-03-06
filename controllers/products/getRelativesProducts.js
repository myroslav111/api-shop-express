const { Product } = require('../../models/product');


const getRelativesProducts = async (req, res) => {
    const productId = req.params.id;

    const products = await Product.find({
        _id: { $ne: productId }
    })

    res.status(200).json(products);
}


module.exports = getRelativesProducts;