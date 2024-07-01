const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=2e1c73ce970717007989e59c91adeadc&units=metric`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (body.cod !== 200) {
      callback("Unable to find location. Try another way", undefined);
    } else {
      callback(undefined, {
        latitude: body.coord.lat,
        longitude: body.coord.lon,
        location: body.name,
      });
    }
  });
};

module.exports = geocode;
