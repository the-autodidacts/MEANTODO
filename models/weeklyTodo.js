var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// WeekTodo is the datatype the object that follows it is the configuration schema
//object id and populate or embed dialyTodo object
var WeeklyTodoSchema = Schema({
    todo: String
});

var weeklyTodo = mongoose.model("weeklyTodo", WeeklyTodoSchema);

module.exports = weeklyTodo;
