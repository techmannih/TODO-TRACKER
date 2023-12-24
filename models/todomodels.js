const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  titleId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  tasks: [
    {
      taskName: {
        type: String,
        required: true,
      },
    },
  ],
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
