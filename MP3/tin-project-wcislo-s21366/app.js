var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Aliia here create router
var indexRouter = require('./routes/index');
const studentRouter = require('./routes/studentRoute');
const instructorRouter = require('./routes/instructorRoute');
const lessonRouter = require('./routes/lessonRoute');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
});

const stuApiRouter = require('./routes/api/StudentApiRoute');
const insApiRouter = require('./routes/api/InstructorApiRoute');
const lessonApiRouter = require('./routes/api/LessonApiRoute');




var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser('secret'));

// create session
const session = require('express-session');
app.use(session({
  secret: 'my_secret_password',
  resave: false
}));

// make session available to templates
app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});


// init languages 
const i18n = require('i18n');
i18n.configure({
   locales: ['ru', 'en'], // languages available in the application. Create a separate dictionary for each of them 
   directory: path.join(__dirname, 'locales'), // path to the directory where the dictionaries are located
   objectNotation: true, // enables the use of nested keys in object notation
   cookie: 'acme-hr-lang', //the name of the cookie that our application will use to store information about the language currently selected by the user
});
app.use(i18n.init); //initialization and connection to the application context

app.use((req, res, next) => {
  if(!res.locals.lang) {
      const currentLang = req.cookies['acme-hr-lang'];
      res.locals.lang = currentLang;
  }
  next();
});


const authUtil = require('./util/authUtils');

//Aliia here user router
app.use('/', indexRouter);
app.use('/student', authUtil.permitAuthenticatedUser, studentRouter);
app.use('/instructor', authUtil.permitAuthenticatedUser, instructorRouter);
app.use('/lesson', authUtil.permitAuthenticatedUser, lessonRouter);
app.use('/api/students', stuApiRouter);
app.use('/api/instructors', insApiRouter);
app.use('/api/lessons', lessonApiRouter);

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
