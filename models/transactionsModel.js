const mogoose = require("mongoose");
const Schema = mogoose.Schema;

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
}, { timestamps: true });

module.exports = mogoose.model("transaction", transactionsModel);