const User = require("../models/user");
const path = require("path");
const postUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.send(user);
    })
    .catch((error) => res.status(400).send(error));
};
const getUser = (req, res) => {
  const _id = req.params.id;
  User.findById({ _id: _id })
    .then((user) => {
      if (!user) {
        return res.status(400).send("No user found");
      }
      res.send(user);
    })
    .catch((error) => res.status(500).send(error));
};
const patchUser = async (req, res) => {
  const _id = req.params.id;
  const update = Object.keys(req.body);
  const allowedUpdate = ["name", "age"];
  const isValidOperation = update.every((u) => {
    return allowedUpdate.includes(u);
  });
  if (!isValidOperation) {
    return res.status(400).send({
      error: "Invalid Operstion",
    });
  }
  try {
    const user = await User.findByIdAndUpdate({ _id: _id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete({ _id: _id });

    if (!user) {
      return res.status(404).send("not found");
    }
    res.redirect("/users");
  } catch (error) {
    res.status(500).send();
  }
};
const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};
module.exports = {
  postUsers,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
  homePage,
};
