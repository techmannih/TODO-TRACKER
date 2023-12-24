const TodoModel = require("../models/todomodels");
const mongoose=require('mongoose')
module.exports.getAllTodo = async (req, res) => {
  try {
    const todolists = await TodoModel.find();
    res.status(200).json({ todo: todolists });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};
module.exports.addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todolist = new TodoModel({ title, tasks: [] }); // Use TodoModel instead of Todo
    await todolist.save();
    res.status(200).json(todolist);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

module.exports.addTodo = async (req, res) => {
  try {
    const { title ,titleId } = req.body;
    const todolist = new TodoModel({ title,titleId, tasks: [] }); // Use TodoModel instead of Todo
    await todolist.save();
    res.status(200).json(todolist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
};
module.exports.deleteTodo = async (req, res) => {
  console.log("DELETE request received");

  try {
    const { id } = req.params; // Use params to get the ID from the URL

    console.log("Todo ID to delete:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Todo ID format' });
    }

    const deletedTodoList = await TodoModel.findByIdAndDelete(id);

    if (!deletedTodoList) {
      return res.status(404).json({ error: 'Todo List not found' });
    }

    res.status(200).json({
      deletedTodo: deletedTodoList,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
};

module.exports.addTask = async (req, res) => {
  try {
    const { id, task } = req.body;

    // Check if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Todo ID format' });
    }

    // Find the Todo list by ID
    const todoList = await TodoModel.findById(id);

    // Check if Todo list exists
    if (!todoList) {
      return res.status(404).json({ error: 'Todo List not found' });
    }

    // Add task to the Todo list
    todoList.tasks.push({ taskName: task });
    await todoList.save();

    // Send success response
    res.status(200).json({ todo: todoList, message: 'Task added successfully' });
  } catch (error) {
    // Handle internal server error
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const { titleId, taskId } = req.body;
    console.log('Received titleId:', titleId);
    console.log('Received taskId:', taskId);
    // Check if titleId and taskId are valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(titleId) || !mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const updatedTodoList = await TodoModel.findOneAndUpdate(
      { _id: titleId },
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );

    if (!updatedTodoList) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTodoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.error(error);
  }
};

