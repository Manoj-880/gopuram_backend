const donationTypeRope = require("../repos/donationTypeRepo");

const getAll = async (req, res) => {
    try {
        // get all the donation types from database
        let allDonationTypes = await donationTypeRope.get();
        res.status(200).send({
            success: true,
            message: "donation types fetched successfully",
            data: allDonationTypes,
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
        // getting the donation type by its id
        let donation = await donationTypeRope.getById(id);
        res.status(200).send({
            success: true,
            message: "donation type fetched successfully",
            data: donation,
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
        // adding donation type to database
        await donationTypeRope.add(req.body);
        res.status(200).send({
            success: true,
            message: "Donation type added successfully",
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
        // updating donation type in database
        await donationTypeRope.updateById(id, req.body);
        res.status(200).send({
            success: true,
            message: "donation updated successfully",
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
        // delete donation type from database by finding by its id
        await donationTypeRope.deleteById(id);
        res.status(200).send({
            success: true,
            message: "donation type deleted successfully",
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
    getById,
    add,
    update,
    deleteById,
}