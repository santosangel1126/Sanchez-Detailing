const { config } = require('dotenv');
config({ debug: process.env.DEBUG });
const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');
// LOADS ENVIRONMENT VARIABLES
config({ debug: process.env.DEBUG });
// LOGS HTTP METHODS
app.use(logger('dev'));
// PARSES JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// PARSES COOKIES
app.use(cookieParser(process.env.SECRET));
// ROUTES
app.use('/users', userRoutes); 
// LISTENS ON PORT
app.listen(process.env.PORT, () =>
  console.log(`App running on http://localhost:${process.env.PORT}`)
);