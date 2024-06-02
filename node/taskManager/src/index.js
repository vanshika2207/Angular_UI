const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// In index.js

app.use(express.json()); //parse incoming json automatically

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port :" + port);
});
