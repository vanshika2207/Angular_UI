const express = require("express");
const connectDB = require("./db/mongoose");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

app = express();

//connect to DB
connectDB();

//set up handlebars view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//middleware to parse request body
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
