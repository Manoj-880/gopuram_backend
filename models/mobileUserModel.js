const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileUserSchema = new Schema({
    userName: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    },
    gender: {
        type: String,
    },
    gothram: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('mobileUser',mobileUserSchema);