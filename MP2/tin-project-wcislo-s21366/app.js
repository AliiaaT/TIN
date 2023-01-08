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

//Aliia here user router
app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/instructor', instructorRouter);
app.use('/lesson', lessonRouter);
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
