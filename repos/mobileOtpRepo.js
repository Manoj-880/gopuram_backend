const mobileOtpModel = require('../models/mobileOtpModel');

const add = (data) => {
    const user = new mobileOtpModel(data);
    return user.save();
};

const findByNumber = (number) => {
    return mobileOtpModel.find({mobileNumber: number});
};

const updateOtp = (number, otp) => {
    return mobileOtpModel.findOneAndUpdate({ mobileNumber: number },{ $set: { otp: otp } },{ new: true });
};


module.exports = {
    add,
    findByNumber,
    updateOtp,
};