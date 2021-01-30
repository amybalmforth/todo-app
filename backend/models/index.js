const mongoose = require('mongoose');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  process.env.MONGODB_URI = 'mongodb://localhost/todo-app-test'
} else {
  process.env.MONGODB_URI = 'mongodb://localhost/todo-app'
}

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
