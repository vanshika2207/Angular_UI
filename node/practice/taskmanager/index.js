const express = require("express");
const path = require("path");
const connectToDb = require("./src/db/mongoose");
const route = require("./src/routes/userRoute");

const viewPath = path.join(__dirname, "../views");
const app = express();
app.use(express.static(viewPath));
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3000);

connectToDb();

app.use("/", route);

app.listen(app.get("port"), () => {
  console.log("server is up and running");
});
