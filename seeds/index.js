const seedUsers = require('./users-seeds');
const seedPackages = require('./packages-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('===================');
    
    await seedUsers();
    console.log('===================');

    await seedPackages();
    console.log('===================');

    process.exit(0);
};

seedAll(); 