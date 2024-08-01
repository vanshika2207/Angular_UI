var express = require("express");
var app = express();
var fs = require("fs");
app.set("port", process.env.PORT || 3000);
var path = require("path");
//fill your code

const users = fs.readFileSync("users.json", 'utf-8');
const userObject = JSON.parse(users)
const detail = Object.entries(userObject)


app.get("/listUsers", (req, res) => {
  res.send(users);
});

app.get("/showUser/:id", (req, res) => {
  const id = req.params.id;
  const findD = detail.find((d) => id == d[1].userId)
  if (findD) {
    res.send(JSON.stringify(findD[1]));

  }
  else {
    res.send('User is not found')
  }

});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;

  const findD = detail.filter((d) => id !== d[1].userId)
  if (findD) {
    newFinD = Object.fromEntries(findD)
    fs.writeFileSync('users.json', JSON.stringify(newFinD))
    res.send(JSON.stringify(newFinD));

  }


})
app.listen(app.get("port"));
// var express = require("express");
// var app = express();
// var fs = require("fs");

// let userData = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

// app.set("port", process.env.PORT || 3000);

// app.get("/", (req, res) => {
//   res.send("Server is up");
// });

// app.get("/listUsers", (req, res) => {
//   return res.send(JSON.stringify(userData));
// });

// app.get("/showUser/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-${id}`;
//   if (key in userData) {
//     return res.send(JSON.stringify(userData[key]));
//   }
//   return res.status(404).send("User not found");
// });

// app.delete("/deleteUser/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-${id}`;
//   if (key in userData) {
//     delete userData[key];
//     fs.writeFileSync("./users.json", JSON.stringify(userData));
//     return res.send(JSON.stringify(userData));
//   }
//   return res.status(404).send("User not found");
// });

// app.listen(app.get("port"), () => {
//   console.log("Server is up and running on port", app.get("port"));
// });
