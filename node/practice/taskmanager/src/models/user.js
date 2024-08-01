const mongoose = require("mongoose");
const user = mongoose.model("user", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = user;
