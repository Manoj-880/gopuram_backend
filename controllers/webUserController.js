const webUserRepo = require("../repos/webUserRepo");

const getAll = async (req, res) => {
    try {
        let allWebUsers = await webUserRepo.get();
        res.status(200).send({
            success: true,
            message: "Web users fetched successfully",
            data: allWebUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        })
    }
};

const addUser = async (req, res) => {
    try {
            let newUser = await webUserRepo.add(req.body);
            res.status(200).send({
                success: true,
                message: "User added successfully",
            });
        // let number = await webUserRepo.findByNumber(req.body.mobileNumber);
        // if(!number){
        //     let newUser = await webUserRepo.add(req.body);
        //     res.status(200).send({
        //         success: true,
        //         message: "User added successfully",
        //     });
        // } else {
        //     res.status(200).send({
        //         success: false,
        //         message: "User already exist with this mobile number"
        //     })
        // }
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
        let userData = await webUserRepo.getById(id);
        res.status(200).send({
            success: true,
            message: "User fetched successfully",
            data: userData,
        });
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const updateById = async (req, res) => {
    try {
        let id = req.params.id;
        await webUserRepo.updateById(id, req.body);
        res.status(200).send({
            success: true,
            message: "User updated successfully",
        })
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
        await webUserRepo.deleteById(id);
        res.status(200).send({
            success: true,
            message: "User deleted successfully",
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
    addUser,
    getById,
    updateById,
    deleteById,
}