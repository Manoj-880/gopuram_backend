const eventTypeRepo = require("../repos/eventTypeRepo");

const getAll = async (req, res) => {
    try {
        let eventTypes = await eventTypeRepo.get();
        res.status(200).send({
            success: true,
            message: "event types fetched successfully",
            data: eventTypes,
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
        await eventTypeRepo.add(req.body);
        res.status(200).send({
            success: true,
            message: "Event type added successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let eventType = await eventTypeRepo.getById();
        res.status(200).send({
            success: true,
            message: "Event type fetched successfully",
            data: eventType,
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
        await eventTypeRepo.updateById(id, req.body);
        res.status(200).send({
            success: true,
            message: "Event type updated successfully",
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
        await eventTypeRepo.deleteById(id);
        res.status(200).send({
            success: true,
            message: "Event type deleted successfully",
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
    update,
    deleteById,
}