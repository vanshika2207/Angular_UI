// var express = require("express");
// var path = require("path");
// var app = express();
// app.set("port", process.env.PORT || 3000);

// // Serve static files from the current directory
// // app.use(express.static(__dirname));

// // Route for '/index' to serve the specific file
// app.get("/index", function (req, res) {
//   res.status(200).sendFile(path.join(__dirname, "index.html"));
// });

// // Route for all other routes to serve the 'index.html' file
// app.get("*", function (req, res) {
//   res.status(400);
//   res.send("Invalid URL");
// });

// // Start the server
// app.listen(app.get("port"), function () {
//   console.log("Server is running on port", app.get("port"));
// });

// var bodyParser = require("body-parser");
// var express = require("express");
// var morgan = require("morgan");
// var app = express();
// app.set("port", process.env.PORT || 3000);

// //custom middleware
// const logger = (req, res, next) => {
//   console.log(req.method);
//   console.log(req.url);
//   next();
// };

// app.use(logger);
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny"));
// app.post("/submit", (req, res) => {
//   res.send("submitted");
//   console.log(req.body);
// });

// //fill your code

// app.listen(app.get("port"));

var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname));
app.set("port", process.env.PORT || 3000);

const eventDetails = {
  events: [
    {
      eventId: 111,
      eventName: "A-Z Planning",
      eventDate: "2019-12-15",
      eventLocation: "Chennai",
    },
    {
      eventId: 112,
      eventName: "Creative Corner",
      eventDate: "2019-07-05",
      eventLocation: "Erode",
    },
    {
      eventId: 113,
      eventName: "DreamTeam",
      eventDate: "2019-06-07",
      eventLocation: "Salem",
    },
    {
      eventId: 114,
      eventName: "Unique Planners",
      eventDate: "2019-11-10",
      eventLocation: "Bangalore",
    },
    {
      eventId: 115,
      eventName: "Last Moment Savers",
      eventDate: "2019-07-05",
      eventLocation: "Erode",
    },
  ],
};

app.get("/events/:id", (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const eventDetail = eventDetails.events.find(
    (event) => event.eventId === eventId
  );
  if (eventDetail) {
    res.send(`
        <html>
        <head>
            <title>Event Details</title>
        </head>
        <body>
            <h1>Event Details</h1>
            <p><strong>Event Id: </strong> ${eventDetail.eventId}</p>
            <p><strong>Event Name: </strong> ${eventDetail.eventName}</p>
            <p><strong>Event Date: </strong> ${eventDetail.eventDate}</p>
            <p><strong>Event Location: </strong> ${eventDetail.eventLocation}</p>
        </body>
        </html>
    `);
  } else {
    res.send(`
        <html>
        <head>
            <title>Event Details</title>
        </head>
        <body>
            <h1>Event Details</h1>
            <p>Event not found.</p>
        </body>
        </html>
    `);
  }
});

app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
