/** for work with server */
const express = require('express');
/** log event  */
const logger = require('morgan');
/** it helps us  */
const cors = require('cors');
/** library to work with env. files */
require('dotenv').config();
// !delete
// const router = express.Router();
/** init express */
const app = express();

/** starting brake point for work with contacts */
const productsRouter = require('./routes/api/products');
const reviewsRouter = require('./routes/api/reviews');

/** starting brake point for work with users */
// ?const authRouter = require('./routes/api/auth');

/** виводить в консоль статус операції (200 і можливо ще якась інфо) */
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));

/** this middleware helps solve problems related to cors */
app.use(cors());

/** this middleware recognizes content type of body */
app.use(express.json());

/** midl access to get file from public without extention by frontend */
// app.use(express.static('public'));
/** here are send our routes */
app.use('/api/products', productsRouter);
app.use('/api/reviews', reviewsRouter);

// const getAllContacts = async (req, res) => {
//   res.status(200).json({ message: 'we got it >' });
// };

// app.use('/api/products', getAllContacts);

/** if front-end require for what is not */
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

/** if something went wrong */
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
// module.exports = router;
