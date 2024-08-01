const userController = require("../controller/userController");
const express = require("express");
route = express.Router();
route.get("/", userController.homePage);
route.post("/signup", userController.createUser);
route.get("/view", userController.viewuser);
module.exports = route;
