const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers/api');
const sequelize = require('./config/connection');
<<<<<<< HEAD

=======
>>>>>>> 5b208f670bf47eb90526fe38ce1a2a4df3408ce5

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log('Now listening'));
});