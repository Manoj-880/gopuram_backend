const eventModel = require("../models/eventModel");

const get = () => {
    return eventModel.find().populate('eventType');
};

const add = (data) => {
    const event = new eventModel(data);
    return event.save();
};

const getById = (id) => {
    return eventModel.findById(id).populate('eventType');
};

const getByUserId = (userId) => {
    return eventModel.find({ userId: userId });
};

const updateById = (id, data) => {
    return eventModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return eventModel.findOneAndDelete({_id: id});
};

module.exports = {
    get,
    add,
    getById,
    getByUserId,
    updateById,
    deleteById,
}