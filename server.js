// Defining Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars');

const sequelize= require('./config/connection');
const sequelizeStore= require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Console logging npm start success
app.listen(PORT, () => console.log('Now listening'));