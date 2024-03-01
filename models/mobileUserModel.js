const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
}

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
}, { timestamps: {
    currentTime: getCurrentIST
} });

module.exports = mongoose.model('mobileUser',mobileUserSchema);