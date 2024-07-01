// const express = require("express");
// const app = express();

// // Parse URL-encoded bodies (typically sent by HTML forms)
// app.use(express.urlencoded({ extended: true }));

// // Example POST endpoint
// app.post("/submit-form", (req, res) => {
//   console.log(req.body); // This will contain the parsed data
//   // Process the data and send a response
//   res.send("Data received and processed!");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// const express = require('express');
// const app = express();

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// // Example POST endpoint
// app.post('/submit-data', (req, res) => {
//     console.log(req.body); // This will contain the parsed JSON data
//     // Process the JSON data and send a response
//     res.json({ message: 'JSON data received and processed!' });
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
