var express = require("express");
var app = express();
var path = require("path");
app.set("port", process.env.PORT || 3000);
const fs = require("fs");
// Body parsing middleware
app.use(express.json());

//-------data of form :

// var events = {
//   1: {
//     eventName: "Marriage Event",
//     eventId: "1",
//   },
//   2: {
//     eventName: "Corporate Event",
//     eventId: "2",
//   },
//   3: {
//     eventName: "Social Event",
//     eventId: "3",
//   },
//   4: {
//     eventName: "Birthday Party",
//     eventId: "4",
//   },
// };

// //crud operations
// //get
// app.get("/", (req, res) => {
//   res.send("A basic crud operator");
// });
// //get event
// app.get("/event", (req, res) => {
//   res.send(events);
// });
// //get event with id
// app.get("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = id;
//   if (key in events) {
//     res.send(events[key]);
//   } else {
//     res.send("event not found");
//   }
// });
// //post event
// app.post("/event", (req, res) => {
//   const newEvent = req.body;
//   const newEventId = Object.keys(events).length + 1;
//   events[newEventId] = newEvent;
//   console.log(events);
//   res.redirect("/event");
// });
// //update an event //patch

// app.patch("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const update = req.body;
//   const key = id;
//   if (key in events) {
//     for (let k in update) {
//       if (events[key].hasOwnProperty(k)) {
//         events[key][k] = update[k];
//       }
//     }
//     res.redirect("/event");
//   }
// });

// app.put("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const update = req.body;
//   const key = id;
//   if (key in events) {
//     events[key] = update;
//     events[key].eventId = key;
//     res.redirect("/event");
//   }
// });
// app.delete("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = id;
//   if (key in events) {
//     delete events[key];
//     res.redirect("/event");
//   }
// });

//data of form

// {
//   "1": {
//     "name": "Alice Johnson",
//     "email": "alice.johnson@example.com",
//     "role": "admin"
//   },
//   "2": {
//     "name": "Bob Smith",
//     "email": "bob.smith@example.com",
//     "role": "editor"
//   },
//   "3": {
//     "name": "Charlie Davis",
//     "email": "charlie.davis@example.com",
//     "role": "viewer"
//   }
// }

// const events = JSON.parse(fs.readFileSync("events.json", "utf8"));

// app.get("/", (req, res) => {
//   res.send("Welcome to CRUD operator");
// });

// app.get("/event", (req, res) => {
//   res.send(JSON.stringify(events));
// });
// app.get("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-key-${id}`;
//   if (key in events) {
//     console.log(events[key]);
//     res.send(JSON.stringify(events[key]));
//   }
// });
// app.delete("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-key-${id}`;
//   if (key in events) {
//     delete events[key];
//     fs.writeFileSync("events.json", JSON.stringify(events));
//     res.redirect("/event");
//   }
// });
// app.post("/event", (req, res) => {
//   const newEvent = req.body;
//   const newEventId = Object.keys(events).length + 1;
//   const key = `user-key-${newEventId}`;
//   events[key] = newEvent;
//   newEvent.eventId = newEventId.toString();
//   fs.writeFileSync("events.json", JSON.stringify(events));
//   res.redirect("/event");
// });

// app.patch("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-key-${id}`;
//   const update = req.body;
//   if (key in events) {
//     for (let keys in update) {
//       if (events[key].hasOwnProperty(keys)) {
//         events[key][keys] = update[keys];
//       }
//     }
//     fs.writeFileSync("events.json", JSON.stringify(events));
//     res.redirect("/event");
//   }
// });

// app.put("/event/:id", (req, res) => {
//   const id = req.params.id;
//   const key = `user-key-${id}`;
//   const update = req.body;
//   if (key in events) {
//     events[key] = update;
//     events[key].eventId = id;
//     fs.writeFileSync("events.json", JSON.stringify(events));
//     res.redirect("/event");
//   }
// });

//other similar example
// {"1":{"name":"Alice Johnson","email":"alice.johnson@example.com","role":"admin"},"2":{"name":"Bob Smith","email":"bob.smith@example.com","role":"editor"},"3":{"name":"Charlie Davis","email":"charlie.davis@example.com","role":"viewer"}}

// app.use(express.json());
// const userData = fs.readFileSync("users.json", "utf8");
// const userDataParsed = JSON.parse(userData);

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// app.get("/user", (req, res) => {
//   res.send(userDataParsed);
// });

// app.get("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const key = id;
//   if (key in userDataParsed) {
//     res.send(userDataParsed[key]);
//   }
// });

// app.post("/user", (req, res) => {
//   const postData = req.body;
//   const postIndex = Object.keys(userDataParsed).length + 1;
//   userDataParsed[postIndex] = postData;
//   console.log(userDataParsed);
//   fs.writeFileSync("users.json", JSON.stringify(userDataParsed));
//   res.redirect("/user");
// });

// app.patch("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   if (id in userDataParsed) {
//     for (let key in updatedData) {
//       if (userDataParsed[id].hasOwnProperty(key)) {
//         userDataParsed[id][key] = updatedData[key];
//       }
//     }
//   }
//   fs.writeFileSync("users.json", JSON.stringify(userDataParsed));
//   res.redirect("/user");
// });

// app.put("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   if (id in userDataParsed) {
//     userDataParsed[id] = updatedData;
//   }
//   fs.writeFileSync("users.json", JSON.stringify(userDataParsed));
//   res.redirect("/user");
// });

// app.delete("/user/:id", (req, res) => {
//   const id = req.params.id;
//   if (id in userDataParsed) {
//     delete userDataParsed[id];
//   }
//   fs.writeFileSync("users.json", JSON.stringify(userDataParsed));
//   res.redirect("/user");
// });

var events = [
  {
    eventName: "Marriage Event",
    eventId: "1",
  },
  {
    eventName: "Corporate Event",
    eventId: "2",
  },
  {
    eventName: "Social Event",
    eventId: "3",
  },
  {
    eventName: "Birthday Party",
    eventId: "4",
  },
];

app.get("/event", (req, res) => {
  res.send(events);
});
app.get("/event/:id", (req, res) => {
  const id = req.params.id;
  const details = events.find((e) => {
    return e.eventId == id;
  });
  if (details) {
    res.send(details);
  }
});
app.post("/event", (req, res) => {
  const postData = req.body;
  const newEventId = (events.length + 1).toString();
  postData.eventId = newEventId;
  events.push(postData);
  res.redirect("/event");
});
app.delete("/event/:id", (req, res) => {
  const id = req.params.id;
  const index = events.findIndex((event) => event.eventId == id);
  if (index !== -1) {
    events.splice(index, 1);
    res.redirect("/event");
  }
});
app.patch("/event/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const event = events.find((event) => event.eventId);
  if (event) {
    for (let key in updates) {
      if (event.hasOwnProperty(key)) {
        event[key] = updates[key];
      }
    }
    res.redirect("/event");
  }
});

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});

///data of form
// {"products":[{"id":1,"name":"Product 1","description":"Description for product 1","price":29.99,"quantity":100},{"id":2,"name":"Product 2","description":"Description for product 2","price":49.99,"quantity":50},{"id":3,"name":"Product 3","description":"Description for product 3","price":19.99,"quantity":150},{"id":4,"name":"Product 4","description":"Description for product 5","price":59.99,"quantity":600}]}

// app.get("/", (req, res) => {
//   res.send("The basic CRUD operation");
// });

// app.get("/product", (req, res) => {
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     response = JSON.parse(response);

//     res.send(response);
//   });
// });

// app.get("/product/:id", (req, res) => {
//   const id = req.params.id;
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     const id = req.params.id;
//     responseData = JSON.parse(response);
//     const productId = responseData.products;

//     const details = productId.find((product) => {
//       return product.id == id;
//     });
//     console.log(details);
//     res.send(details);
//   });
// });

// app.post("/product", (req, res) => {
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     const postData = req.body;
//     responseData = JSON.parse(response);

//     responseData.products.push(postData);
//     fs.writeFileSync("products.json", JSON.stringify(responseData));
//     res.send(responseData);
//   });
// });

// app.patch("/product/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     const id = req.params.id;
//     const update = req.body;
//     const responseData = JSON.parse(response);
//     const detail = responseData.products.find((p) => {
//       return p.id == id;
//     });
//     const index = responseData.products.indexOf(detail);

//     for (let key in update) {
//       if (detail.hasOwnProperty(key)) {
//         detail[key] = update[key];
//       }
//     }
//     responseData.products[index] = detail;
//     fs.writeFileSync("products.json", JSON.stringify(responseData));
//     res.send(responseData);
//   });
// });

// app.put("/product/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     const id = req.params.id;
//     const update = req.body;
//     const responseData = JSON.parse(response);
//     const detail = responseData.products.find((p) => {
//       return p.id == id;
//     });
//     const index = responseData.products.indexOf(detail);

//     responseData.products[index] = update;
//     fs.writeFileSync("products.json", JSON.stringify(responseData));
//     res.send(responseData);
//   });
// });

// app.delete("/product/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (error, response) => {
//     if (error) {
//       return error;
//     }
//     const id = req.params.id;
//     const responseData = JSON.parse(response);
//     const detail = responseData.products.filter((p) => p.id != id);
//     responseData.products = detail;
//     console.log(responseData);
//     fs.writeFileSync("products.json", JSON.stringify(responseData));
//     res.send(responseData);
//   });
// });
