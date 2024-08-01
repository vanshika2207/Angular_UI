const user = require("../models/user");
const path = require("path");
const express = require("express");

const homePage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const createUser = async (req, res) => {
  const newUser = new user({ name: req.body.name, age: req.body.age });
  try {
    await newUser.save();
    res.send("success");
  } catch (error) {}
};

const viewuser = async (req, res) => {
  const userList = await user.find({});
  res.send(userList);
};

module.exports = { homePage, createUser, viewuser };
