const route = require("./routes");
const express = require("express");

const app = express();

app.use("/", route);

app.listen(3000);
