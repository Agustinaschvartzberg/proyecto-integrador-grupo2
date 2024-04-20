var path = require('path');
var logger = require('morgan');
<<<<<<< HEAD
var express = require('express');
var createError = require('http-errors');
var router_user = require('./routes/user');
var cookieParser = require('cookie-parser');
var router_index = require('./routes/index');
var router_product = require('./routes/products');
=======

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
>>>>>>> e315a26b1c4e0326c93aef765df66f86c5f44f89

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use('/', router_index);
app.use('/', router_product);
app.use('/', router_user);

=======
app.use('/', indexRouter);
app.use('/user', usersRouter);
>>>>>>> e315a26b1c4e0326c93aef765df66f86c5f44f89

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
