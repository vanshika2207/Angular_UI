const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", controller.getHomePage);
router.post("/submit", controller.postStudent);
router.get("/list", controller.findStudent);
router.get("/list/:id", controller.findStudentByRollNo);
router.patch("/list/:id", controller.updateStudent);
router.delete("/list/:id", controller.deleteStudent);

module.exports = router;
