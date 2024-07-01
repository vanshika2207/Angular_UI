const https = require("https");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=23&lon=50&appid=2e1c73ce970717007989e59c91adeadc&units=metric`;

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    try {
      const body = JSON.parse(data);
      console.log(body);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
});

request.on("error", (error) => {
  console.error("An error occurred:", error);
});

request.end();
