const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
}

const galleryModel = new Schema({
    image: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "webUser",
    },
},{timestamps: {
    currentTime: getCurrentIST
}});

module.exports = mongoose.model('gallery', galleryModel);