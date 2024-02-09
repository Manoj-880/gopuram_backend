const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
}, { timestamps: true });

module.exports = mongoose.model('eventType', eventTypeModel);