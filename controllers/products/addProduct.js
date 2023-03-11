const { Product } = require('../../models/product');
const uploadImageCloudinaryFun = require('../../utils/uploadImageCloudinaryFun');

const addProduct = async (req, res) => {
  const { name, description, price, urls } = req.body;

  const cloudImages = [];

  const arrValues = [];

  Object.values(urls).forEach(dataImageClient => {

    const result = uploadImageCloudinaryFun.uploader.upload(dataImageClient, {
      folders: 'products',
    });
    arrValues.push(result);
  }
  );

  const arrDataClientImage = await Promise.all(arrValues)

  arrDataClientImage.forEach(el => cloudImages.push(el.secure_url))

  const urlsArr = arrDataClientImage.map(el => el.secure_url)

  const modernSlug = name.trim().toLowerCase().replace(/\W+/g, '-');

  // foo.find().sort({ _id: 1 }).limit(50);

  // const singleLastProduct = await Product.findOne({ $query: {}, $orderby: { 'createdAt': 1 } });
  const singleLastProduct = await Product.findOne().sort({ createdAt: 1 });

  console.log("singleLastProduct", singleLastProduct);



  const product = await Product.create({
    name,
    description,
    price,
    images: urlsArr,
    slug: modernSlug,
    productId: 373733335,
    reviews: [],
  });

  res.status(201).json(product);
};

module.exports = addProduct;
