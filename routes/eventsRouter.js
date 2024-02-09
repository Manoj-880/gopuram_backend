const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get('/', eventController.getAll);
router.get('/eventid/:id', eventController.getById);
router.get('userid/:id', eventController.getByUserId);
router.post('/add', eventController.add);
router.put('/update/:id', eventController.update);
router.delete('/delete/:id', eventController.deleteById);

module.exports = router;