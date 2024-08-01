const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydb1");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", schema);

const me = new User({
  name: "Vanshika",
  age: 21,
});
me.save().then((data) => {
  console.log(data);
});

const me2 = User.create({
  name: "Teesha",
  validate(value) {
    if (value < 0) {
      throw new Error("not allowed");
    }
  },
  age: 21,
});
console.log(me2);
me2.then((data) => {
  console.log(data);
});
