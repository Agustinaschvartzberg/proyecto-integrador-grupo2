var path = require('path');
var logger = require('morgan');
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
const session = require('express-session');


const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const profileRouter = require('./routes/profile');
const profileEditRouter = require('./routes/profileEdit');
const searchResultsRouter = require('./routes/searchResults');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "Agus y vicky",
  saveUninitialized: true,
  resave: false
}));

app.use(function(req, res, next) {
  if (req.cookies.Galletita  != undefined && req.session.usuarios == undefined) {
    let datosRecordados = req.cookies.Galletita;
    db.Usuario.findByPk(datosRecordados.id)
     .then((user) => {
        req.session.usuarios = usuarios;
        res.locals.usuarios = usuarios;
        return next();
      })
     .catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }
});



app.use('/', indexRouter);
app.use('/productos', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/profileEdit', profileEditRouter);
app.use('/product/search-results', searchResultsRouter);


//app.use('/usuarios', usersRouter);

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