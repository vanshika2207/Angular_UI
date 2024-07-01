const Task = require("../models/task");
const { all } = require("../routes/taskRoutes");

const postTask = async function (req, res) {
  const newTask = new Task({
    name: req.body.name,
    isCompleted: req.body.isCompleted,
  });
  try {
    await newTask.save();
    console.log("Task saved successfully:", newTask);
    res.send(newTask);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAll = async function (req, res) {
  try {
    const alltask = await Task.find({});
    res.send(alltask);
    console.log("get all task", alltask);
  } catch (error) {
    res.status(400).send(error);
  }
};
// const getOne = async;

module.exports = {
  postTask,
  getAll,
};
