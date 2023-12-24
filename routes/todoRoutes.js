const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  deleteTodo,
  addTask,
  addTodo,
  deleteTask,
} = require("../controllers/todoController");

// Define routes
router.route("/todolists").post(addTodo); // Create a new todo list
router.route("/todolists").get(getAllTodo); // Get all todo lists
// router.route("").put(updateTodo);
router.route("/todolist/:titleId").delete(deleteTodo); // Delete a todo list
router.route("/todolist/:titleId/task").post(addTask); // Add a task to a todo list
// router.route("").put(updateTask);
router.route("/todolist/:titleId/task/:id").put(deleteTask); // Delete a task from a todo list

module.exports = router;
