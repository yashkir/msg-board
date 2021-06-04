var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

const postsRouter = require('./routes/api/posts')

require('dotenv').config()
require('./config/database');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, '..', 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', postsRouter);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.post('/hello', function(req, res) {
  res.json('hello');
});

app.use(function(err, req, res, next) {
  res.json('error');
});

module.exports = app;
