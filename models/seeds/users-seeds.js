const sequalize = require('../config/connection');
const {User, Post } = require('../models');

const userData = {
    name: ' Sanchez Auto Detailing',
    city: 'Los Angeles',
    state: 'CA',
    zipcode: '90018'

};

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;