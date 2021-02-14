const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Order', OrderSchema);