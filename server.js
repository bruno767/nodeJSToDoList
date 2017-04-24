var express = require('express'),
  app = express(),
  port = process.env.PORT || 27017,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app,use

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoute');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);