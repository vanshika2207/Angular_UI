const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2e1c73ce970717007989e59c91adeadc&units=metric`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to network", undefined);
    } else if (body.cod !== 200) {
      callback("Unable to fetch information", undefined);
    } else {
      callback(
        undefined,
        `${body.weather[0].description}. It is currently ${body.main.temp} degrees Celsius at ${body.name}. It feels like ${body.main.feels_like} degrees Celsius.`
      );
    }
  });
};

module.exports = forecast;
