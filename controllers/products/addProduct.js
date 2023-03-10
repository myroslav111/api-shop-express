const { Product } = require('../../models/product');
const uploadImageCloudinaryFun = require('../../utils/uploadImageCloudinaryFun');

const addProduct = async (req, res) => {
  const { name, description, price, urls } = req.body;

  const result = await uploadImageCloudinaryFun.uploader.upload(urls[0], {
    folder: 'products',
  });
  const resultt = await uploadImageCloudinaryFun.uploader.upload(urls[1], {
    folder: 'products',
  });

  const linkImg = [result.secure_url, resultt.secure_url];
  // const arrCloud = [];
  //   for (let index = 0; index < urls.length; index++) {
  //     const url = urls[index];
  //     const result = await uploadImageCloudinaryFun.uploader.upload(url, {
  //       folders: 'products',
  //     });

  //     arrCloud.push(result);
  //   }
  //   urls.map(async url => {
  //     const result = await uploadImageCloudinaryFun.uploader.upload(url);
  //     console.log('result', result);
  //     return result;
  //   });
  //   console.log('arrCloud', arrCloud);
  //   const result = await uploadImageCloudinaryFun.uploader.upload()
  const product = await Product.create({
    name,
    description,
    price,
    images: linkImg,
    slug: 'jhlkheedd',
    productId: 373733333,
    reviews: [],
  });
  //   const product = await Product.create({ ...req.body });
  res.status(201).json(product);
};

module.exports = addProduct;
