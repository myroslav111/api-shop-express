const { Product } = require('../../models/product');
const { RequestError } = require('../../helpers');


const getProductBySlug = async (req, res) => {
    const productName = req.params.slug;

    const product = await Product.findOne({ slug: productName });

    if (!product) {
        throw RequestError(404, `Product ${productName} not found`);
    };

    res.status(200).json(product);
}


module.exports = getProductBySlug;