const mongoose = require('mongoose');

const ScanQRSchema = mongoose.Schema(
    {
        _idReference: mongoose.ObjectID,
        QR: String,
        createdQRDate: Date,
        scanQRList: [
            {
                _idScanner: mongoose.ObjectID,
                timeScan: Date,
                locationScan: {
                    longtitude: String,
                    latitude: String
                }
            }
        ]
    }
);

module.exports = mongoose.model('ScanQR', ScanQRSchema);