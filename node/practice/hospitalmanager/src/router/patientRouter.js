const express = require("express");
const {
  getHomePage,
  postPatient,
  listPatient,
} = require("../controller/patientController");
router = express.Router();

router.get("", getHomePage);
router.post("/detail", postPatient);
router.get("/list", listPatient);

module.exports = router;
