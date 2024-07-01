const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  res.send(`<h1>welcome user</h1><h3>your information is :</h3>
    <p><strong>Name :${name}<strong></p>
     <p><strong>Email :${email}<strong></p>`);
  //undefined if not used with express.urlencoded
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
