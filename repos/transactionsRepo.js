const transactionsModel = require("../models/transactionsModel");

const get = () => {
    return transactionsModel.find().populate('donationType');
};

const add = (data) => {
    const transaction = new transactionsModel(data);
    return transaction.save();
}

const getById = (id) => {
    return transactionsModel.findById(id).populate('donationType');
};

const getByUserId = (userId) => {
    return transactionsModel.find({ userId: userId }).populate('donationType');
};

const updateById = (id, data) => {
    return transactionsModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return transactionsModel.findOneAndDelete({_id: id});
};

module.exports = {
    get,
    add,
    getById,
    getByUserId,
    updateById,
    deleteById,
};