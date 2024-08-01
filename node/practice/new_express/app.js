const express = require("express");
const app = express();

app.use(express.static("public"));

// app.all("*", (req, res) => {
//   res.send(`<h1>This is the home page</h1>`);
// });

app.get("/", (req, res) => {
  console.log(req);
});
app.post("/", (req, res) => {
  res.send(`<h1>This is the home post page</h1>`);
});
app.delete("/", (req, res) => {
  res.send(`<h1>This is the home delete page</h1>`);
});
app.put("/", (req, res) => {
  res.send(`<h1>This is the home put page</h1>`);
});

app.listen(3000, () => {
  console.log("server is up and running");
});
