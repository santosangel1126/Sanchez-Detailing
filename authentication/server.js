const { config } = require('dotenv'); //done
config({ debug: process.env.DEBUG }); // done
const express = require('express'); //done
const app = express(); // done
const logger = require('morgan'); //done
const cookieParser = require('cookie-parser'); // done
const userRoutes = require('./routes/user'); // CHECK THIS LATER
// LOADS ENVIRONMENT VARIABLES
config({ debug: process.env.DEBUG });
// LOGS HTTP METHODS
app.use(logger('dev')); // done
// PARSES JSON
app.use(express.urlencoded({ extended: true })); //done
app.use(express.json()); //done
// PARSES COOKIES
app.use(cookieParser(process.env.SECRET)); // done
// ROUTES
app.use('/users', userRoutes); 
// LISTENS ON PORT
app.listen(process.env.PORT, () =>
  console.log(`App running on http://localhost:${process.env.PORT}`)
);