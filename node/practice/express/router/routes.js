const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("homepage");
});
route.post("/", (req, res) => {
  res.statusCode(200);
});

route.get("/contact", (req, res) => {
  res.send("contactme");
});
module.exports = route;
