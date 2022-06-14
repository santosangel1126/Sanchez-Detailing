// In routes/user.js
const router = require('express').Router();
const {login, logout, signup, cookieCheck, getUsers} = require('../controllers/user');
router.get('/all', getUsers);
router.get('/authorized', cookieCheck);
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);
module.exports = router;


// THIS IS DONE