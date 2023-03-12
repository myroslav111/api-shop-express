const { Schema, model } = require('mongoose');

const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const productSchema = new Schema(
  {
    name: { type: String, unique: true },
    description: { type: String, required: true },
    price: { type: Number },
    reviews: { type: [{ type: Schema.Types.ObjectId, ref: 'review' }] },
    images: [String],
    // images: { url: { type: string }, public_id: result.public_id },
    slug: { type: String, unique: true },
    productId: { type: Number, unique: true },
    typeProduct: { type: String },
  },
  { versionKey: false, timestamps: true }
);

// срабатывает в случае ошибки при операции POST(при попытке добавить ещё один элемент с уже существующим таким уникальным полем)
productSchema.post('save', handleSaveErrors);

// создает схему для валидации body при запросе
const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  reviews: Joi.array(),
  images: Joi.array(),
  slug: Joi.string().required(),
  typeProduct: Joi.string().required(),
});

// создает схему для валидации поля favorite при update с помощью Joi
const updatePriceSchema = Joi.object({
  price: Joi.number().required(),
});

const Product = model('product', productSchema);

// объект со всевозможными схемами для валидации body при запросе
const schemas = {
  addProductSchema,
  updatePriceSchema,
};

module.exports = {
  Product,
  schemas,
};
