var express    = require('express'),
    router     = express.Router(),
    server     = express(),
    weeklyTodo = require('../models/weeklyTodo.js'),



/////////////////Just the Date ///////////////////////////
    date       = new Date(),
    month      = date.getMonth() + 1,
    day        = date.getDate().toString(),
    year       = date.getFullYear().toString(),
    dateString = month.toString() + "/" + day + "/" + year;
////////////////////////////////////////////////////////////
////////////// All Purpose LOGGER//////////////////////////
router.use(function (req, res, next) {
  console.log("============Todo Routes==============");
  console.log("REQ DOT BODY", req.body);
  console.log("REQ DOT PARAMS", req.params);
  console.log("REQ DOT SESSION", req.session);
  next();
});

/////////////////////////Routes////////////////////////////

//the get route to get all weeklyTodos
router.get('/', function(req,res){
  // Passing in todos to find
  weeklyTodo.find(function(err, todos){
      if (err)
          res.send(err)
      res.json(todos); //renders json
  });
});

////Create a new weeklyTodo
router.post('/', function (req, res){
  weeklyTodo.create({
      todo: req.body.text,
      done: false
  }, function (err, todos) {
      if (err)
        res.send(err);

      weeklyTodo.find(function(err, todos){
          if (err)
              res.send(err)
          res.json(todos); //renders json
        });
    });
});

//////DELETE A weeklyTodo///
router.delete('/:todo_id', function(req, res) {
    weeklyTodo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        weeklyTodo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});





// export router objects
module.exports = router;
