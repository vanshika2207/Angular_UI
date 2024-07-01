const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.render("index", { users, title: "Welcome" });
  } catch (error) {
    console.log("There is error in getting user", error);
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const newUser = new User({ name: req.body.name, age: req.body.age });
  try {
    await newUser.save();
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(err);
  }
};

const helpUser = (req, res) => {
  res.render("help", {
    title: "Help Page",
  });
};

module.exports = { getUser, helpUser, createUser };
