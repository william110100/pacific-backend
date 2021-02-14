const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    age: {
        type: String,
    },
    role: {
        type: String,
    }
});

module.exports = mongoose.model('User', UserSchema);