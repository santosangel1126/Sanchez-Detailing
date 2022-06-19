const sequelize = require('../config/connection');
const {User, Post } = require('../models');

const userData = [
    {
        username: 'test',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;