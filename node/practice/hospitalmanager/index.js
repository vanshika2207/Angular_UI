const express = require("express");
const connectDb = require("./src/db/mongoose");
const path = require("path");
const router = require("./src/router/patientRouter");

const app = express();
connectDb();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "src/views/static")));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("Server is running");
});
