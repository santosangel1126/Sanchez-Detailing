const seedUsers = require('./users-seeds');
const seedAppointments = require('./appointment-seeds');
const seedPackages = require('./packages-seeds');

const sequalize = require('../config/connection');
const sequelize = require('../../config/connection');

const seedAll = async () => {
    await sequelize.sync({firce: true});
    console.log('__________');
    
    await seedUsers();
    console.log('____________');

    await seedPackages();
    console.log('___________');

    await seedAppointments();
    console.log('___________');

    process.exit(0);
};

seedAll();