const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validation(value) {},
  },
});

module.exports = User;
