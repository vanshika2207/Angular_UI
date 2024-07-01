const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { firstName: "" });
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName.length;

  res.render("index", { firstName: firstName });
});

app.listen(3000, () => {
  console.log("server is running");
});
