const eventRepo = require("../repos/eventRepo");

const getAll = async (req, res) => {
    try {
        let events = await eventRepo.get();
        res.status(200).send({
            success: true,
            message: "events fetched successfully",
            data: events,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const add = async (req, res) => {
    try {
        console.log(req.body);
        await eventRepo.add(req.body);
        res.status(200).send({
            success: true,
            message: "Event added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};


const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let event = await eventRepo.getById(id);
        res.status(200).send({
            success: true,
            message: "event fetched successfully",
            data: event,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const getByUserId = async (req, res) => {
    try {
        let id = req.params.id;
        let events = await eventRepo.getByUserId(id);
        res.status(200).send({
            success: true,
            message: "User events fetched successfully",
            data: events,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const update = async (req, res) => {
    try {
        let id = req.params.id;
        await eventRepo.updateById(id, req.body);
        res.status(200).send({
            success: true,
            message: "Events updated successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        await eventRepo.deleteById(id);
        res.status(200).send({
            success: true,
            message: "Events deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    getAll,
    add,
    getById,
    getByUserId,
    update,
    deleteById,
}