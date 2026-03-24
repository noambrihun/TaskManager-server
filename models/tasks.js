const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('Tasks', tasksSchema);
