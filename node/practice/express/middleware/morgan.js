const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
