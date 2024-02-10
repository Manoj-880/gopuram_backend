const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileUserSchema = new Schema({
    userName: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    gothram: {
        type: String,
    },
    address: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('mobileUser',mobileUserSchema);