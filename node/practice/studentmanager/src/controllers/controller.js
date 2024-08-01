const Student = require("../models/student");

const getHomePage = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.error("There is an error", error);
    res.status(500).send("Internal Server Error");
  }
};

const postStudent = async (req, res) => {
  try {
    console.log(req.body);
    await Student.create(req.body);
    res.status(200).redirect("/");
  } catch (error) {
    console.error("Error posting student", error);
    res.status(400).send("Bad Request");
  }
};

const findStudent = async (req, res) => {
  try {
    const list = await Student.find({});
    res.render("list", { list: list });
  } catch (error) {
    console.error("Error finding students", error);
    res.status(500).send("Internal Server Error");
  }
};

const findStudentByRollNo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = await Student.findOne({ rollNo: id });
    if (student) {
      res.send(`<h1>This is information about ${student.name}</h1>`);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error finding student by roll number", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedStudent = await Student.findOneAndUpdate(
      { rollNo: id },
      req.body,
      { new: true }
    );
    if (updatedStudent) {
      res
        .status(200)
        .send(`Student with roll number ${id} updated successfully`);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error updating student", error);
    res.status(400).send("Bad Request");
  }
};

const deleteStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedStudent = await Student.findOneAndDelete({ rollNo: id });
    if (deletedStudent) {
      res
        .status(200)
        .send(`Student with roll number ${id} deleted successfully`);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error deleting student", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getHomePage,
  postStudent,
  findStudent,
  findStudentByRollNo,
  updateStudent,
  deleteStudent,
};
