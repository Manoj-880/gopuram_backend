const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");

router.get('/', transactionsController.get);
router.get('/transactionid/:id', transactionsController.getById);
router.get('/userid/:id', transactionsController.getByUserId);

module.exports = router;