const mongoose = require('mongoose');

const WarningSchema = mongoose.Schema(
    {
        _idReference: mongoose.ObjectID,
        locationWarn: String,
        QRWarn: String,
        message: String,
        createdTime: Date,
        seen: Boolean
    }
);

module.exports = mongoose.model('Warning', WarningSchema);