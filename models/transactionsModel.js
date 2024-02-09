const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const transactionsModel = new Schema({
    donationType: {
        type: mogoose.Schema.Types.ObjectId,
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
}, { timestamps: true });

module.exports = mogoose.model("transaction", transactionsModel);