const transactionsModel = require("../models/transactionsModel");

const get = () => {
    return transactionsModel.find().populate('donationType').populate('userId');
};

const add = (data) => {
    const transaction = new transactionsModel(data);
    return transaction.save();
}

const getById = (id) => {
    return transactionsModel.findById(id).populate('donationType');
};

const getByUserId = (userId) => {
    return transactionsModel.find({ userId: userId }, {userId: 0, createdAt: 0, updatedAt: 0, __v: 0}).populate({path: 'donationType',select: '-_id -createdAt -updatedAt -__v'});
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