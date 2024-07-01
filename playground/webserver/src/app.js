const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const app = express();

//define path to express config
const viewPath = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");

//set up handlebar engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// setup static directory to server
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Vanshika Saxena",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Vanshika Saxena",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help ",
    message: "Here to help",
    name: "Vanshika Saxena",
  });
});

//app.com/weather
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(
    req.query.address,

    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return req.send(error);
      }
      forecast(latitude, longitude, (error, forecastedData) => {
        if (error) {
          return req.send(error);
        }
        res.send({
          location: req.query.address,
          temperature: forecastedData,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    message: " help page does not exist",
    name: "Vanshika Saxena",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    message: " page does not exist",
    name: "Vanshika Saxena",
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
