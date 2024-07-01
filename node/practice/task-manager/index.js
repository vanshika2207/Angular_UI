const express = require("express");
const path = require("path");
const connectDB = require("./db/mongoose");
const taskRoutes = require("./routes/taskRoutes");
const exp = require("constants");

app = express();
connectDB();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", taskRoutes);

const PORT = 3000;
app.listen(3000, () => {
  console.log("Server up and running");
});
