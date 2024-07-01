const hbs = require("hbs");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "hbs");

//register the partial
const partialPath = path.join(__dirname, "/partials");
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    body: "this is about hbs partials",
    footer: "created by vanshika",
  });
});

app.listen(3000);
