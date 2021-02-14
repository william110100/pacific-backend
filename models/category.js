const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    }
});

module.exports = mongoose.model('Category', CategorySchema);