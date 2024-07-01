const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/tasks", taskController.postTask);
router.get("/tasks", taskController.postTask);

module.exports = router;
