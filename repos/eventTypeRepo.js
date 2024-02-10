const eventTypeModel = require("../models/eventTypeModel");

const get = () => {
    return eventTypeModel.find();
};

const add = (data) => {
    const eventType = new eventTypeModel(data);
    return eventType.save();
};

const getById = (id) => {
    return eventTypeModel.find({_id: id});
};

const updateById = (id, data) => {
    return eventTypeModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return eventTypeModel.findOneAndDelete({_id: id});
};

module.exports = {
    get, 
    add,
    getById,
    updateById,
    deleteById,
}