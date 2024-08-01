const mongoose = require("mongoose");

const coonectToDb = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db1");
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Error connecting to the database");
  }
};

module.exports = coonectToDb;
