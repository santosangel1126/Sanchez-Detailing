//import all models
const User = require('./User');
const Appointments = require('./Appointments');
const client = require('./clients');
const packages = require('./packages');

client.belongsTo(User,{
    foreignKey: 'user_id'
});

//User.hasMany(Rating,{
 //   foreignKey: 'packages_id'
//});

User.hasMany(Appointments,{
    foreignKey: 'packages_id'
});

Appointments.belongsTo(User,{
    foreignKey: 'packages_id'
});

client.hasMany(Appointments,{
    foreignKey: 'client_id'
});

Appointments.belongsTo(client,{
    foreignKey: 'client_id'
});

packages.belongsTo(User,{
    foreignKey: 'user_id'
});

module.exports = { User, client ,packages ,Appointments };