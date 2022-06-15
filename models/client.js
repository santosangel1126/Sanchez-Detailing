const { models, Datatype } = require('sequelize');
const { DataTypes } = require('sequelize/types');
const sequelize = require('../config/connection');

class client extends models {}

client.init(
    {
        client_id: {
            type: DataTypes.INTEGER,
            primaryKEY: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type:DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                models: 'user',
                key: 'user_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        //prevent from renaming table
        freezeTableName: true,
        undersocred: true,
        modelName: 'client'
    }
);

module.exports = client;