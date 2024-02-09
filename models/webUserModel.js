const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const webUserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    password: {
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
}, { timestamps: true });

module.exports = mongoose.model('webUser',webUserSchema);