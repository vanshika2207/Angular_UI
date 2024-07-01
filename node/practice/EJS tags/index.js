const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {
    title: "EJS TAGS",
    second: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index", data);
});

app.listen(3000);
