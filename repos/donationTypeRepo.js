const donationTypeModel = require("../models/donationTypeModel");

const get = () => {
    return donationTypeModel.find();
};

const add = (data) => {
    const donation = new donationTypeModel(data);
    return donation.save();
};

const getById = (id) => {
    return donationTypeModel.find({_id: id});
};

const updateById = (id, data) => {
    return donationTypeModel.findOneAndUpdate({_id: id}, {$set: data});
};

const deleteById = (id) => {
    return donationTypeModel.findOneAndDelete({_id: id});
};

module.exports = {
    get,
    add,
    getById,
    updateById,
    deleteById,
}