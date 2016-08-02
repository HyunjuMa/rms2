var express = require('express');
var app = express.Router();

var auth = require('./auth');
var project = require('./project');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

app.use('/auth', auth);
app.use('/project', project);

module.exports = app;
