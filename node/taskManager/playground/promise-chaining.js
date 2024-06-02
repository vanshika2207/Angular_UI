require("../src/db/mongoose");

const User = require("../src/models/user");

// //66585da903ca94ca6e44400b
// User.findByIdAndUpdate("6658607c731f0bcfd1ebf6a0", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return user;
};
updateAgeAndCount("66585da903ca94ca6e44400b", 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
