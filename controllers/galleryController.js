const galleryRepo = require('../repos/galleryRepo');
const path = require('path');
const fs = require('fs');

const add = async (req, res) => {
    try {
        console.log(req.protocol+' and host:'+req.get('host'));
        const filePath = req.file.path;
        console.log(filePath);
        const file=fs.readFileSync(filePath, {encoding: 'base64'});
        const userId = req.body.userId;
        const data = {
            image: filePath,
            userId: userId,
        };
        await galleryRepo.add(data);
        res.status(200).send({
            success: true,
            message: 'Images added successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const getAll = async (req, res) => {
    try {
        const imagesData = await galleryRepo.get();
        const images = imagesData.map(image => ({
            id: image._id,
            image: fs.readFileSync(image.image, {encoding: 'base64'})
        }));
        res.status(200).send({
            success: true,
            message: 'images fetched successfully',
            images: images,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteImage = async(req, res) => {
    try {
        let imageToDelete = await galleryRepo.getById(req.params.id);
        fs.unlinkSync(imageToDelete.image);
        await galleryRepo.deleteById(req.params.id);
        res.status(200).send({
            success: true,
            message: 'Image deleted successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}

module.exports = {
    add,
    getAll,
    deleteImage,
}