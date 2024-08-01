const Patient = require("../model/patient");

const getHomePage = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log("there is an error");
    res.status(500).send("Internal Server error");
  }
};
const postPatient = async (req, res) => {
  try {
    console.log(req.body);
    await Patient.create(req.body);
    res.status(200).redirect("/");
  } catch (error) {
    console.log("Error posting student", error);
    res.status(400).send("Bad Request");
  }
};
const listPatient = async (req, res) => {
  try {
    const list = await Patient.find({});
    res.render("list", { list: list });
  } catch (error) {
    console.error("Error finding students", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getHomePage,
  postPatient,
  listPatient,
};
