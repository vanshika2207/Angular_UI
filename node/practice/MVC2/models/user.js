const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  age: {
    type: Number,
    required: false,
  },
});

module.exports = User;
