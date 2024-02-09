const express = require("express");
const router = express.Router();
const donationTypeController = require("../controllers/donationTypeController");

router.get('/', donationTypeController.getAll);
router.get('/donationid/:id', donationTypeController.getById);
router.post('/add', donationTypeController.add);
router.put('/update/:id', donationTypeController.update);
router.delete('/delete/:id', donationTypeController.deleteById);

module.exports = router;