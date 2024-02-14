const mobileUserRepo = require("../repos/mobileUserRepo");

const getAll = async (req, res) => {
    try {
        let allMbileUsers = await mobileUserRepo.get();
        res.status(200).send({
            success: true, 
            message: "  usersss fed succeessfully",
            data: allMbileUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const addUser = async(req, res) => {
    try {
        let newUser = await mobileUserRepo.add(req.body);
            res.status(200).send({
                success: true,
                message: "User added successfully",
            });
        // let number = await mobileUserRepo.findByNumber(req.body.mobileNumber);
        // if(!number){
        //     let newUser = await mobileUserRepo.add(req.body);
        //     res.status(200).send({
        //         success: true,
        //         message: "User added successfully",
        //     });
        // } else {
        //     res.status(200).send({
        //         success: false,
        //         message: "Mobile number already exists",
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

const getUser = async(req, res) => {
    try {
        let id = req.params.id;
        let userData = await mobileUserRepo.getById(id);
        res.status(200).send({
            success: true,
            message: "User fetched successfully",
            data: userData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const update = async(req, res) => {
    try {
        let id = req.params.id;
        let newData = await mobileUserRepo.updateById(id, req.body);
        res.status(200).send({
            success: true,
            message: "user udated successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteById = async(req, res) => {
    try {
        let id = req.params.id;
        await mobileUserRepo.deleteById(id);
        res.status(200).send({
            success: true,
            message: "user deleted successfully",
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
    getUser,
    update,
    addUser,
    deleteById,
}