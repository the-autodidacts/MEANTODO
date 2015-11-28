var express             = require('express'),
    PORT                = process.env.PORT || 5432,
    server              = express(),
    MONGOURI            = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
    DBNAME              = 'angularTodo',
    parser              = require('body-parser'),
    ejs                 = require('ejs'), //Angular is taking care of this **redundant**
    expressEjsLayouts   = require('express-ejs-layouts'),//angular
    session             = require('express-session'),
    methodOverride      = require('method-override'),
    mongoose            = require('mongoose'),
    morgan              = require('morgan'),
    WeeklyTodo          = require('./models/weeklyTodo.js');


///////////Server Set UP and Use Defaults///////////////
server.set('views', './views');
server.set('view engine', 'ejs');

server.use(methodOverride('_method'));
server.use(morgan('dev')); //Logger
server.use(express.static('./public'));
server.use(expressEjsLayouts);//No used removed before pushing to prod
server.use(parser.urlencoded({ extended: true }));
server.use(parser.json());
server.use(parser.json({ type: 'application/json' }));

// router
todoController      = require('./controllers/weeklyTodos.js');
server.use('/weeklyTodos', todoController);


server.get('', function(req, res) {
    res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

mongoose.connect(MONGOURI + "/" + DBNAME);
server.listen(PORT, function (){
  console.log("Hey listening on PORT: ", PORT);
});
