require("../src/db/mongoose");
// 66588126678dc9baa0b2e47e
const Task = require("../src/models/task");

// Task.findByIdAndDelete("66585beec3d225638be4122d")
//   .then((user) => {
//     console.log(user);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("66588126678dc9baa0b2e47e")
  .then((result) => {
    console.log("Result", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });
