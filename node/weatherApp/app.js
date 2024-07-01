const request = require("postman-request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

input = process.argv[2];
// callback chaining
if (input) {
  geocode(input, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastdata);
    });
  });
} else {
  console.log("Please provide a location");
}
