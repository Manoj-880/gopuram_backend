const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventModel = new Schema({
    eventType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "eventType",
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mobileUser",
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("event", eventModel);