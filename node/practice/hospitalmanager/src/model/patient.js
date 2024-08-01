const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("Patient", schema);

module.exports = Patient;
