const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const data = fs.readFileSync("Students.json");

const dataJSON = JSON.parse(data);

app.get("/list", (req, res) => {
  res.send(data);
});

app.post("/add", (req, res) => {
  const newStudent = req.body;

  console.log(newStudent);
  const indexS = Object.keys(dataJSON).length + 1;
  newStudent.id = String(indexS + 100);
  const key = `student-${indexS}`;
  dataJSON[key] = req.body;

  console.log(dataJSON);
  fs.writeFileSync("Students.json", JSON.stringify(dataJSON));
  res.send("Student details added");
});

app.listen(3000);
