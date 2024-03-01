const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
}

const eventTypeModel = new Schema({
    title: {
        type: String,
        require: true,
    },
    duration: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
}, { timestamps: {
    currentTime: getCurrentIST
} });

module.exports = mongoose.model('eventType', eventTypeModel);