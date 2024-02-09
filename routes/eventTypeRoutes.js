const express = require("express");
const router = express.Router();
const eventTypeController = require("../controllers/eventTypeController");

router.get('/', eventTypeController.getAll);
router.get('/eventtypeid/:id', eventTypeController.getById);
router.post('/add', eventTypeController.add);
router.put('/update/:id', eventTypeController.update);
router.delete('/delete/:id', eventTypeController.deleteById);

module.exports = router;