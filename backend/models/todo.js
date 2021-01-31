const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;
