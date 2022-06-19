const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const { config } = require('dotenv');
config({ debug: process.env.DEBUG });
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


// const hbs = exphbs.create({ helpers });

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine({
  layoutsDir: __dirname + './views/layouts'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// view routes
app.get('/', (req, res) => {
  res.render("homepage", {layout: "main"})
})
app.get('/login', (req, res) => {
  res.render("login", {layout: "main"})
})

app.use(routes);
app.use(logger('dev'));
app.use(cookieParser(process.env.SECRET));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });