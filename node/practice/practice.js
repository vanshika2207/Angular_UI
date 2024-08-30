const mongoose = require("mongoose");
const { isAlpha } = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/test1");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive");
      }
    },
  },
});
const cat = mongoose.model("user", schema);

const me = cat
  .create({
    name: "Vanshika",
    age: 21,
  })
  .then((data) => console.log(data));
console.log(me);

const me2 = new cat({
  name: "                 vfsg",
  age: 63,
});
me2.save().then((data) => {
  console.log(me2);
  console.log(data);
});
