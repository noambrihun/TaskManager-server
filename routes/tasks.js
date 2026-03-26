const express = require("express")
const router = express.Router()
const Task = require("../models/tasks")

// GET all tasks
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
})

// CREATE task
router.post("/tasks", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    completed: false,
    description: req.body.description
  })

  const savedTask = await task.save()
  res.json(savedTask)
})

// DELETE task
router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)
  res.json({ message: "Task deleted" })
})

// UPDATE task (toggle completed)
router.put("/tasks/:id", async (req, res) => {
  try {

    const { completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        completed: completed,
        completedAt: completed ? new Date() : null
      },
      { new: true }
    );

    res.json(updatedTask);

  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

module.exports = router