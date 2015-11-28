var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// WeekTodo is the datatype the object that follows it is the configuration schema
//object id and populate or embed dialyTodo object
var dailyTodoSchema = Schema({
    author:         Object
});

var dailyTodo = mongoose.model("dailyTodo", dailyTodoSchema);

module.exports = dailyTodo;
