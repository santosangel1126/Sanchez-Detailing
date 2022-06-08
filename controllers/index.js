const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => { // remove this when we have a real route to go to for home-routes
    res.send("<h1>Wrong Route!</h1>");
})

module.exports = router;