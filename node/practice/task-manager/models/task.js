const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  name: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
});

module.exports = Task;
