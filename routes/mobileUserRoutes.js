const express = require("express");
const router = express.Router();
const mobileUserController = require("../controllers/mobileUserController");

router.get('/', mobileUserController.getAll);
router.post('/generateOtp', mobileUserController.generateOtp);
router.post('/login', mobileUserController.login);
router.get('/userid/:id', mobileUserController.getUser);
router.post('/add', mobileUserController.addUser);
router.put('/update/:id', mobileUserController.update);
router.delete('/delete/:id', mobileUserController.deleteById);

module.exports = router;