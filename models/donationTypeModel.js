const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationTypeModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("donationType", donationTypeModel);