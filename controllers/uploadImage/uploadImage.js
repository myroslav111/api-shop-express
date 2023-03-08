const uploadImageCloudinaryFun = require('./uploadImageCloudinaryFun');

const uploadImage = (req, res) => {
  uploadImageCloudinaryFun(req.body.image)
    .then(url => res.send(url))
    .catch(err => res.status(500).send(err));
};
module.exports = uploadImage;
