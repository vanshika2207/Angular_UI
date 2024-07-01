const express = require("express");
const path = require("path");
const app = express();
const events = [
  {
    id: 1,
    name: "Marriage Event",
    file: "event1.html",
  },
  {
    id: 2,
    name: "Corporate Event",
    file: "event2.html",
  },
  {
    id: 3,
    name: "Social Event",
    file: "event3.html",
  },
  {
    id: 4,
    name: "Birthday Party",
    file: "event4.html",
  },
];
app.get("/event", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/event/:id/:name", (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.params.name;
  const details = events.find((e) => {
    return e.id === id && e.name === name;
  });
  console.log(details);
  if (details) {
    res.sendFile(path.join(__dirname, "views", details.file));
  }
});

app.listen(3000, () => {
  console.log("server up");
});
