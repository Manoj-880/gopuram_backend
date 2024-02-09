const express = require("express");
const router = express.Router();
const webUserController = require("../controllers/webUserController");

router.get('/', webUserController.getAll);
router.post('/add', webUserController.addUser);
router.get('/userid/:id', webUserController.getById);
router.put('/update/:id', webUserController.updateById);
router.delete('/delete/:id', webUserController.deleteById);

module.exports = router;