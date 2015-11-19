var express    = require('express'),
    router     = express.Router(),
    Todo       = require('../models/todo.js'),
    date       = new Date(),
    month      = date.getMonth() + 1,
    day        = date.getDate().toString(),
    year       = date.getFullYear().toString(),
    dateString = month.toString() + "/" + day + "/" + year;

//All Purpose LOGGER
router.use(function (req, res, next) {
  console.log("============Todo Routes==============");
  console.log("REQ DOT BODY", req.body);
  console.log("REQ DOT PARAMS", req.params);
  console.log("REQ DOT SESSION", req.session);
  next();
});

///////////////Routes/////////////////////////
//the get route to get all todos
router.get('/todos', function(req,res){
  //Passing in todos to find
  Todo.find(function(err, todos){
      if (err)
          res.send(err)
      res.json(todos); //renders json
  });
});

router.post('/todos', function (req, res){
  Todo.create({
      text: req.body.text,
      done: false
  }, function (err, todos) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos){
          if (err)
              res.send(err)
          res.json(todos); //renders json
        });
    });
});


router.delete('/todos/:todo_id', function(req, res) {
    Todo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});





// export router objects
module.exports = router;
