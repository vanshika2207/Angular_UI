const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("Connection establishes");
  } catch (error) {
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
