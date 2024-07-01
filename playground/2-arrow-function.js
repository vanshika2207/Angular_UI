// const square = function (x) {
//   return x * x;
// };

//arrow function
// const square = (x) => {
//   return x * x;
// };

//more shorthand

// const square = (x) => x * x;
// console.log(square(2));

const event = {
  name: "BirthDay Party",
  guestList: ["a", "b"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " c is attending " + this.name);
    });
  },
};
event.printGuestList();
