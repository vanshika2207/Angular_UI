//importing the express module
const express = require("express");
//instantiating the server
const app = express();
//let us set up routes

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the home page </h1>");
});

app.post("/", (req, res) => {
  res.sendStatus(201); //created
});

app.put("/", (req, res) => {
  res.status(200).send("working");
});

app.patch("/", (req, res) => {
  res.status(200).send("working");
});

app.delete("/", (req, res) => {
  res.status(200).send("working");
});

app.get("*", (req, res) => {
  res.send("the page not found");
});
//running and listening to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is up and running on port :", PORT);
});
