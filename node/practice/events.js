const EventEmitter = require("events");

const emitter = new EventEmitter();

//listen for the events
emitter.on("order-pizza", (arg1, arg2) => {
  console.log("order received ", arg1, arg2);
});
console.log("hello");
emitter.on("order-pizza", (size) => {
  if (size == "large") {
    console.log("coldrink");
  }
});
console.log("hello");
emitter.emit("order-pizza", "large", "mushroom");

///--------------------------------------------------------------------
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("order-cakes", (arg1, arg2) => {
//   console.log("Cake order received", arg1, arg2);
// });

// emitter.emit("order-cakes", "chocolate", "1 kg");
// emitter.on("order-cakes-size", (size) => {
//   if (size > 1) {
//     console.log("You have got a free sponge cake");
//   }
// });
// emitter.emit("order-cakes", "chocolate", "3 kg");
// emitter.emit("order-cakes-size", 4);
