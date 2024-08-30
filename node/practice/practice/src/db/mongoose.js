const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test1");
    console.log("Connected successfully");
  } catch (error) {
    console.log("Connection failed");
    return;
  }
}

module.exports = connectDB;
