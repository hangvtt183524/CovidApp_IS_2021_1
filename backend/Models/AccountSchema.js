const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema(
    {
        CCCD: Number,
        email: String,
        password: String,
        userName: String,
        phoneNumber: Number,
        accessToken: String,
        isLoginPC: Boolean,
        isLoginPhone: Boolean,
        uuidPC: String,
        uuidPhone: String
    }
);

module.exports = mongoose.model('Account', AccountSchema);