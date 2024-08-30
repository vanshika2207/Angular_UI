const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017");
// const cat = mongoose.model("Cat", { name: "string" });
// const kitty = new cat({ name: "kittykit" });
// kitty.save().then(() => {
//   console.log("meow");
// });

const user = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
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

const me = user
  .create({
    name: "Vanshika",
    age: 21,
  })
  .then((data) => console.log(data));

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
console.log(me);
