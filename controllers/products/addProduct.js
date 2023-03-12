const { Product } = require('../../models/product');
const uploadImageCloudinaryFun = require('../../utils/uploadImageCloudinaryFun');

const addProduct = async (req, res) => {
  const { name, description, price, urls, typeProduct } = req.body;

  const cloudImages = [];

  const arrValues = [];

  // create image url on cloudinary
  Object.values(urls).forEach(dataImageClient => {
    const result = uploadImageCloudinaryFun.uploader.upload(dataImageClient, {
      folders: 'products',
    });
    arrValues.push(result);
  });

  const arrDataClientImage = await Promise.all(arrValues);

  arrDataClientImage.forEach(el => cloudImages.push(el.secure_url));

  const urlsArr = arrDataClientImage.map(el => el.secure_url);

  const modernSlug = name.trim().toLowerCase().replace(/\W+/g, '-');

  const singleLastProduct = await Product.findOne().sort({ createdAt: -1 });

  // assign productId for current product
  const currentProductId = singleLastProduct.productId + 1;

  const product = await Product.create({
    name,
    description,
    price,
    images: urlsArr,
    slug: modernSlug,
    productId: currentProductId,
    reviews: [],
    typeProduct,
  });

  res.status(201).json(product);
};

module.exports = addProduct;
