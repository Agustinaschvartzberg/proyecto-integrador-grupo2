var path = require('path');
var logger = require('morgan');
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./database/models');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register')
let profileRouter = require('./routes/profile')
let profileEditRouter = require('./routes/profileEdit')
let searchResultsRouter = require('./routes/searchResults')


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(
  {
    secret:"Agus y vicky",
    saveUninitialized: true,
    resave: false
  }
  ));
  
  app.use(function(req, res, next){
    if(req.session.usuarios != undefined){
      res.locals.usuarios = req.session.usuarios
      return next ();
    }
  return next ();
  })
  
  app.use(function(req, res, next){
    if (req.cookies.Galletita != undefined && req.session.usuarios == undefined){
      let datosRecordados = req.cookies.Galletita;
      db.Usuario.findByPk (datosRecordados.id)
      .then((usuarios)=>{

        res.session.usuarios = usuarios
        res.locals.usuarios = usuarios
        return next()
      }) .catch((err)=>{
        console.log(err)
      });
    } else{
      return next()
    }
  }
  )
  

app.use('/', indexRouter);
//app.use('/usuarios', usersRouter);
app.use('/productos', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter)
app.use('/profileEdit', profileEditRouter)
app.use('/search-results', searchResultsRouter)



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
