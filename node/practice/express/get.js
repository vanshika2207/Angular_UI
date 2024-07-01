const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, "assets")));
//C:\Users\saxen\OneDrive\Documents\Angular_UI\node\practice\express\assets

// Routing

// Send a text
app.get("/", (req, res) => {
  res.send("Welcome to my home page");
});

// Send an HTML file
const firstName = "vanshika";
app.get("/detail", (req, res) => {
  res.send(`<html>
    <head>
    <link rel="stylesheet" href="/styles/style.css">
    <title>Detail</title>
    
    <style>
    h1 {
      color: red;
    }
    </style>
    </head>
    <body>
    <h1>This is the detail page</h1>
    <p style="color: purple; font-weight: 900;">JavaScript is giving dynamic nature to our webpage</p>
    <button onclick="clicked()">Click me</button>
    <img src="/images/img.jpg" width="100" height="100">
    <p>${firstName}</p>
    <script>
      function clicked() {
        alert("You clicked the button");
      }
    </script>
    </body>
    </html>`);
});

//send a json file

//1)using res.send()
app.get("/json1", (req, res) => {
  res.send({
    name: "Vanshika",
    age: 21,
    isMarried: false,
  });
});

//2)using res.json()
app.get("/json2", (req, res) => {
  res.json({
    name: "Vanshika",
    age: 21,
    isMarried: false,
  });
});

//sendFile()

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/templates/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
