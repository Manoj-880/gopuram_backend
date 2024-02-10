const webUserModel = require("../models/webUserModel");

const get = () => {
    return webUserModel.find();
};

const add = (data) => {
    const user = new webUserModel(data);
    return user.save();
};

const getById = (id) => {
    return webUserModel.find({_id:id});
};

const findByNumber = (number) => {
    return webUserModel.find({mobileNumber: number});
};

const findByUserName = (name) => {
    return webUserModel.find({userName: name});
}

const updateById = (id, data) => {
    return webUserModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return webUserModel.findOneAndDelete({_id: id});
}

module.exports = {
    get,
    add,
    getById,
    findByNumber,
    findByUserName,
    updateById,
    deleteById,
};