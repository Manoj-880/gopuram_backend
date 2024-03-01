const mogoose = require("mongoose");
const Schema = mogoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
}

const transactionsModel = new Schema({
    donationType: {
        type: String,
        ref: "donationType",
        required: true,
    },
    userId: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "mobileUser",
        required: true,
    },
    for: {
        type: String,
    },
    gothram: {
        type: String,
    },
    amount: {
        type: Number,
    },
    donationName: {
        type: String,
    }
}, { timestamps: {
    currentTime: getCurrentIST
} });

module.exports = mogoose.model("transaction", transactionsModel);