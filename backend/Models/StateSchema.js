const mongoose = require('mongoose');

const StateSchema = mongoose.Schema(
    {
        _idReference: mongoose.ObjectID,
        typeRef: {
            type: String,
            enum: ['1', '2']
        },
        typeState: {
            type: String,
            enum: ['F0', 'F1', 'F2']
        },
        createdTime: Date
    }
);

module.exports = mongoose.model('State', StateSchema);