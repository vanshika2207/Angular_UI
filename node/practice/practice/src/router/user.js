const express = require("express");
const {
  getUser,
  getUsers,
  postUsers,
  patchUser,
  deleteUser,
  homePage,
} = require("../controller/user");
const router = express.Router();

router.post("/users", postUsers);
router.get("/users", getUsers);

router.get("/user/:id", getUser);
router.patch("/user/:id", patchUser);

router.delete("/user/:id", deleteUser);
router.get("/", homePage);
module.exports = router;
