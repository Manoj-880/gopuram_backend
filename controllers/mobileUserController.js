const mobileUserRepo = require("../repos/mobileUserRepo");
const mobileOtpRepo = require('../repos/mobileOtpRepo');
const otp = require('../utils/otp');

const generateOtp = async (req, res) => {
    try {
        let {mobileNumber} = req.body;
        let newOtp = otp.geneateOTP();
        let user = await mobileOtpRepo.findByNumber(mobileNumber);
        if(user.length > 0){
            await mobileOtpRepo.updateOtp(mobileNumber, newOtp);
        } else {
            let data = {
                mobileNumber, otp: newOtp
            };
            await mobileOtpRepo.add(data);
        };
        res.status(200).send({
            success: true,
            message: "Otp generated",
            otp: newOtp,
        });
    } catch (error) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        })
    }
}

const login = async (req, res) => {
    try {
        let { mobileNumber, otp } = req.body;
        let userMobileOtp = await mobileOtpRepo.findByNumber(mobileNumber);
        let dbOtp = userMobileOtp[0].otp;
        let user = await mobileUserRepo.findByNumber(mobileNumber);
        let existance = user.length > 0;

        if (otp === dbOtp) {
            if (user.length === 0) {
                return res.status(200).send({
                    success: true,
                    message: "OTP verified successfully",
                    existance: existance,
                });
            }
            res.status(200).send({
                success: true,
                message: "OTP verified successfully",
                existance: existance,
                data: user,
            });
        } else {
            res.status(400).send({
                success: false,
                message: "Invalid OTP",
            });
        }
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
        let allMbileUsers = await mobileUserRepo.get();
        res.status(200).send({
            success: true, 
            message: "  users fetched succeessfully",
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
        let number = await mobileUserRepo.findByNumber(req.body.mobileNumber);
        if(number.length < 1){
            await mobileUserRepo.add(req.body);
            res.status(200).send({
                success: true,
                message: "User added successfully",
            });
        } else {
            res.status(400).send({
                success: false,
                message: "Mobile number already exists",
            })
        }
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
    generateOtp,
    login,
    getAll,
    getUser,
    update,
    addUser,
    deleteById,
}