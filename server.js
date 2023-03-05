/** import app there are our logic */
// const app = require('./app');
// /** for work with db */
// const mongoose = require('mongoose');

// const { DB_HOST_CAFE, PORT = 3000 } = process.env;
// /** when db exist next step to run server */
// mongoose
//   .connect(DB_HOST_CAFE)
//   .then(() => {
//     console.log('Server running. Use our API on port: 4200');
//     app.listen(PORT);
//   })
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   });

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });

const express = require('express');
const router = require('./app');

const app = express();

const PORT = process.env.PORT || 5050;
app.use('/api/product', router);

app.listen(PORT, '0.0.0.0', () => console.log(`server is run ${PORT}`));
