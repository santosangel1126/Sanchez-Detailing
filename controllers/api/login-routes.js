const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.email
        }
    })
    .then(dbUserData => {
        // if username is not found
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with that username found!'
            });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        //if password is not correct
        if (!validPassword) {
            res.status(400).json({ 
                message: 'Incorrect Password!'
            });
            return;
        }

        //save to session
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ 
                user: dbUserData,
                message: 'You are now logged in!'
            });
        });
    });
});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Update Route
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({
                message: 'No User Found With This ID!'
            });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;