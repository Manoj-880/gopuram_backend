const mobileUserModel = require("../models/mobileUserModel");

const get = () => {
    return mobileUserModel.find();
};

const add = (data) => {
    const user = new mobileUserModel(data);
    return user.save();
};

const getById = (id) => {
    return mobileUserModel.find({_id:id});
};

const findByNumber = (number) => {
    return mobileUserModel.find({mobileNumber: number});
}

const updateById = (id, data) => {
    return mobileUserModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return mobileUserModel.findOneAndDelete({_id: id});
}

module.exports = {
    get,
    add,
    getById,
    findByNumber,
    updateById,
    deleteById,
};