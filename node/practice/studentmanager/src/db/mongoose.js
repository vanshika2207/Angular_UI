const mongoose = require("mongoose");

const connectDb = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
    console.log("successfully connected to the database");
  } catch (error) {
    console.log("there is error connecting to the database");
  }
};
module.exports = connectDb;
