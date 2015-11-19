var mongoose = require('mongoose'),
    Schema   = mongoose.Schema
mongoose.set('debug', true);

// This model can be anything you want to make it.
var todoSchema = Schema({
  text: String
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
