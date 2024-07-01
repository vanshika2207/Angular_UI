express = require("express");
const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("<h1>Heloo Vanshi</h1>");
  // console.log(response);
});

app.get("/about", (request, response) => {
  response.send("<h1>About Me </h1> <p> I am Vanshika </p>");
});
app.post("/register", (req, res) => {
  res.sendStatus(201);
});
app.put("/user/vanshi", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/vanshi", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/vanshi", (req, res) => {
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
