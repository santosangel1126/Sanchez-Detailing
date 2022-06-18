const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Package } = require('../models');

router.get('/login', (req, res) => {
    // if already logged in redirect to homepage,
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    //otherwise render login page
    res.render('login');
});

router.get('/booknow', (req, res) => {
    res.render('booking');
});

module.exports = router;