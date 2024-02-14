const webUserRepo = require("../repos/webUserRepo");
const hashing = require('../utils/hashing');

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
        });
    }
};

const login = async (req, res) => {
    try {
        let {userName, password} = req.body;
        const existingUsers = await webUserRepo.findByUserName(userName);
        if(existingUsers.length === 0){
            return res.status(200).send({
                success : false,
                message: "Invalid User name and password",
            });
        } else {
            let existingUser = existingUsers[0];
            hashedPassword = existingUser.password;
            let match = await hashing.comparePasswords(password, hashedPassword);
            if (match){
                return res.status(200).send({
                    success: true,
                    message: "Logged in successfully",
                    data: existingUser,
                });
            } else {
                return res.status(200).send({
                    success : false,
                    message: "Invalid User name and password",
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const addUser = async (req, res) => {
    try {
        let mobileNumber = req.body.mobileNumber;
        const existingUser = await webUserRepo.findByNumber(mobileNumber);
        const user = await webUserRepo.findByUserName(req.body.userName);
        if (existingUser.length > 0) {
            return res.status(200).send({
                success: false,
                message: "User already exists with this mobile number",
            });
        }
        if(user.length > 0) {
            return res.status(200).send({
                success: false,
                message: "User name already exist"
            });
        }
        let password = req.body.password;
        let hashedPassword = await hashing.hashPassword(password);
        let newUser = req.body;
        newUser.password = hashedPassword;
        await webUserRepo.add(newUser);
        res.status(200).send({
            success: true,
            message: "User added successfully",
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
        let user = await webUserRepo.findByUserName(req.body.userName);
        if(user.length > 1){
            return res.status(200).send({
                success: false,
                message: "User name already exist"
            });
        }
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
    login,
    getAll,
    addUser,
    getById,
    updateById,
    deleteById,
}