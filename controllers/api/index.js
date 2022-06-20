const router = require('express').Router();

const userRoutes = require('./login-routes.js');

router.use('/users', userRoutes);

module.exports = router;