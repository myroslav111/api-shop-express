const { Schema, model } = require('mongoose');

const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const reviewSchema = new Schema({
    text: { type: String },

    rating: { type: Number },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },

},
    { versionKey: false, timestamps: true }
);

// создает схему для валидации body при запросе 
const addReviewSchema = Joi.object({
    text: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(5),
    product: Joi.string().required(),
});

// срабатывает в случае ошибки при операции POST(при попытке добавить ещё один элемент с уже существующим таким уникальным полем)
reviewSchema.post('save', handleSaveErrors);

const schemas = {
    addReviewSchema,
}

const Review = model('review', reviewSchema);

module.exports = {
    Review,
    schemas,
};
