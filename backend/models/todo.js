const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
    unique: true,
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
