const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Package } = require('../models');

router.get('/', (req, res) => {
    Package.findAll({
        attributes: [
            'name',
            'description',
            'price'
        ]
    })
    .then(dbPackageData => {
        const packages = dbPackageData.map(package => package.get({ plain: true}));

        res.render('homepage', {
            packages
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

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
    res.render('calendly');
});

module.exports = router;