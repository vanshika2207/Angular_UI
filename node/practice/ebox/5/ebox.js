const express = require("express");
const path = require("path");
const app = express();
const events = [
  {
    id: 1,
    name: "Marriage Event",
  },
  {
    id: 2,
    name: "Corporate Event",
  },
  {
    id: 3,
    name: "Social Event",
  },
  {
    id: 4,
    name: "Birthday Party",
  },
];
app.get("/event", (req, res) => {
  res.sendFile(path.join(__dirname, "ebox.html"));
});
//fill your code
app.get("/event/:id/:name", (req, res) => {
  const eventRequestid = req.params.id;
  const eventRequestname = req.params.name;

  const details = events.find((event) => {
    return event.name == eventRequestname && event.id == eventRequestid;
  });
  console.log(details);
  if (details) {
    res.send(` <body>
    <div style="background-color:pink">
      <h1>Event Details</h1>
    </div>
    <br>
    <div style="background-color:lightpink">
      <p>Event Id : ${details.id}</p>
      <p>Event name : ${details.name}</p>
      <p></p>
    </div>

  </body>`);
  }
});
app.get("*", (req, res) => {
  res.send(` <body>
    <div style="background-color:pink">
      <p>Oops! Page Not found</p>
    </div>`);
});

app.listen(3000, () => {
  console.log("server up");
});
