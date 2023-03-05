const { Schema, model } = require('mongoose');

const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const productSchema = new Schema({
  name: { type: String, unique: true },
  description: { type: String, required: true },

  price: { type: Number },

  reviews: { type: [{ type: Schema.Types.ObjectId, ref: 'Review' }] },

  images: [String],

  slug: { type: String, unique: true },

  productId: { type: Number, unique: true },
});

// срабатывает в случае ошибки при операции POST(при попытке добавить ещё один элемент с уже существующим таким уникальным полем)
productSchema.post('save', handleSaveErrors);

const Product = model('product', productSchema);

module.exports = {
  Product,
};
