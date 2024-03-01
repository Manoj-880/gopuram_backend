const transactionRepo = require("../repos/transactionsRepo");

const get = async (req, res) => {
    try {
        let allTransactions = await transactionRepo.get();
        res.status(200).send({
            success: true,
            message: "Transactions fetched successfully",
            data: allTransactions,
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
        await transactionRepo.add(req.body);
        res.status(200).send({
            success: true,
            message: "Transaction successful",
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
        let transaction = await transactionRepo.getById(id);
        res.status(200).send({
            success: true,
            message: "Transaction fetched successfully",
            data: transaction,
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
        let id = req.params.userid;
        let transactions = await transactionRepo.getByUserId(id);
        res.status(200).send({
            success: true,
            message: "user transactions fetched successfully",
            data: transactions,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}

module.exports = {
    get,
    add,
    getById,
    getByUserId,
}