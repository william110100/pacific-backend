const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    addressId: {
        type: String,
        required: true,
    },
    line1: {
        type: String,
        required: true,
    },
    line2: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    userId: {
        type: String,
    }
});

module.exports = mongoose.model('Address', AddressSchema);