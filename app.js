let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// To make public directory static for api docs
app.use(express.static('public'));


// START Routes
let testRoutes = require('./routes/test');

app.use('/', testRoutes);
// END Routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  let errorMessage = {};
  errorMessage.message = err.message;
  errorMessage.error = req.app.get('env') === 'development' ? err : {};

  errorMessage.status = err.status || 500;

  res.json(errorMessage);
});

module.exports = app;
