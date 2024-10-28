// app.js

require('dotenv').config(); // Load environment variables from .env file
var express = require('express');
var path = require('path');
var createError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var cors = require('cors');
const passport = require('passport'); // Import Passport

require('./app_api/models/db'); // Load the database connection
require('./app_api/config/passport'); // Load Passport configuration

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

var app = express();

// Enable CORS using the cors middleware
app.use(cors({
  origin: '*', // Allow all origins. Change this to specific domains if needed.
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specified methods
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'] // Add 'Authorization' for token-based authentication
}));

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));
app.set('view engine', 'hbs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Passport middleware
app.use(passport.initialize());

// Use route handlers
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter); // Set up API route handling

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
