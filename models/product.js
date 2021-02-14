const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    imageSlider: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    qty: {
        type: Number,
    },
    shortDesc: {
        type: String,
    },
    categoryId: {
        type: String,
    }
});

module.exports = mongoose.model('Product', ProductSchema);