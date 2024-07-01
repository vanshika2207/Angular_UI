const express = require("express");
const path = require("path");

const app = express();

const viewPath = path.join(__dirname, "assets/templates");
app.set("view engine", "hbs");
app.set("views", viewPath);

app.get("/", (req, res) => {
  res.render("home", {
    title: "welcome",
    footer: "bye",
  });
});

app.listen(3000);
