const express = require("express");

const connectDB = require("./src/db/mongoose");

const router = require("./src/router/user");

const app = express();
connectDB();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(router);
app.listen(app.get("port"), () => console.log("Server is running"));
