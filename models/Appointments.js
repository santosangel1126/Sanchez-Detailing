const {model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends model { }

Appointments.init(
    {
        appointment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'client_id'
            }
        },
        packages_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        date: {
            type: DataTypes.STRING
        },

    }
);
module.exports = Appointments;