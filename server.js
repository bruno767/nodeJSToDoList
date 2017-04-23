

var express = require('express'),
  app = express(),
  port = process.env.PORT || 27017,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//var configDB = require('./config/database.js');

//mongoose.Promise = global.Promise;

//mongoose.connect(configDB.url); 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LoginAPI');

app.use(morgan('dev'));
app.use(cookieParser());

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser());
app.set('view engine', 'ejs');

app.use(session({secret: 'NodeJSAPIBrunoBarreto'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./api/routes/routes')(app,passport);
//var routes = require('./api/routes/todoListRoute');
//routes(app);

app.listen(port);


console.log('API Login server started on: ' + port);

