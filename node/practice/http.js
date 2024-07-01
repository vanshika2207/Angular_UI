const http = require("http");

// //create a server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello world");
// });
// server.listen(3000, () => {
//   console.log("server running in the port 3000");
// });

//creating a client
url = "https://reqres.in/api/users?page=2";
const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
  response.on("error", () => {
    console.log("there is an error", error);
  });
});

request.end();
