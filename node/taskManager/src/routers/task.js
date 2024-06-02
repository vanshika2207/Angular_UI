const express = require("express");
const { model } = require("mongoose");
const Tasks = require("../models/task");

const taskRouter = new express.Router();

taskRouter.post("/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    return res.status(201).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
});

taskRouter.get("/tasks", async (req, res) => {
  try {
    const task = await Tasks.find({});
    return res.send(task);
  } catch (error) {
    return res.status(500).send();
  }
});

taskRouter.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      res.status(400).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

taskRouter.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "completed"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update" });
  }
  try {
    const task = await Tasks.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    //handling validation
    res.status(400).send(error);
  }
});
taskRouter.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = taskRouter;
