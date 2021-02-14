const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetailSchema = new Schema({
    detailId: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
    }
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);