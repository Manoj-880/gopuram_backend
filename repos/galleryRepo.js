const galleryModel = require('../models/galleryModel');

const get = () => {
    return galleryModel.find();
};

const add = (data) => {
    const image = new galleryModel(data);
    return image.save();
};

const getById = (id) => {
    return galleryModel.findById(id);
}

const deleteById = (id) => {
    return galleryModel.findByIdAndDelete(id);
};

module.exports = {
    get,
    add,
    deleteById,
    getById,
}