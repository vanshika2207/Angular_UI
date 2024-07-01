let express = require("express");
//built in module
let path = require("path");
//middlewares modules
const hbs = require("hbs");
var bodyParser = require("body-parser");
var morgan = require("morgan");

//paths
const filePath = path.join(__dirname, "./public");
const viewPath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");
// console.log(filePath);

//instantiate
const app = express();

//________________Middlewares____________________
//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//morgan
app.use(morgan("tiny"));
//custom middlewares
app.use((req, res, next) => {
  console.log("This is the custom middleware");
  console.log("Request method :", req.method);
  console.log("Reguest URL :", req.url);
  next();
});

//________________________________________________
//configuration
app.set("view engine", "hbs");
app.set("views", viewPath);

//for serving static files
app.use(express.static(filePath));

//register for partial path
hbs.registerPartials(partialPath);

//get request
app.get("/", (req, res) => {
  res.render("index", {
    title: "Index page",
    body: "vanshika",
  }),
    console.log("this is the request", req.query);
  console.log("this is the request property", req.query.lastname);
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help page",
    body: "vanshika",
  });
});

//sending text
app.get("/homepage", (req, res) => {
  res.send("Hello welcome to my Home Page");
});
//sending html
app.get("/contact", (req, res) => {
  res.send("<h1>This is the contact page</h1>");
});
//sending json object
app.get("/aboutme", (req, res) => {
  res.send({
    name: "Vanshika Saxena",
    age: 21,
  });
});
//post request
app.post("/", (req, res) => {
  res.status(201).send("done");
});

//put request
app.put("/", (req, res) => {
  res.sendStatus(200);
});

//patch request
app.patch("/", (req, res) => {
  res.sendStatus(200);
});

//delete request
app.delete("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/form.html"));
});
app.post("/login", (req, res) => {
  res.send("Successfully login");
  console.log("Body", req.body); //body parser process the request
});

app.get("/user/:id", (req, res) => {
  res.send(req.params.id);
  console.log("params", typeof req.params.id);
});

app.get("*", (req, res) => {
  res.send("sorry does not exist");
});
app.listen(3000, () => {
  console.log("server is running");
});
