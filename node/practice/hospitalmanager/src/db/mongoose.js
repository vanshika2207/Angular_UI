const mongoose = require("mongoose");

const connectDb = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb1");
    console.log("Succesfully connected to database");
  } catch (error) {
    console.log("there is error connecting to database");
  }
};

module.exports = connectDb;
