const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileOtpSchema = new Schema({
    mobileNumber: {
        type: Number,
    },
    otp: {
        type: Number,
    },
}, {timestamps: true});

module.exports = mongoose.model('mobileOtp', mobileOtpSchema);