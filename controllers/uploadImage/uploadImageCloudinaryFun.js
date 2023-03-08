const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: 'auto',
};

// Upload

// const res = cloudinary.uploader.upload(
//   'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
//   { public_id: 'olympic_flag' }
// );

// res
//   .then(data => {
//     console.log(data);
//     console.log(data.secure_url);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Generate
// const url = cloudinary.url('olympic_flag', {
//   width: 100,
//   height: 150,
//   Crop: 'fill',
// });

// The output url
// console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

module.exports = image => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);

      return reject(new Error('something bad happened'));
    });
  });
};
