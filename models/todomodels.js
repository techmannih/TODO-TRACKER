const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  
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
  dateStamp: {
    type: Date,
    default: Date.now,
  },
},

{ timestamps: true }
);

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
