const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes
    })
})