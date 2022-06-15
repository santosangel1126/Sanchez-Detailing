const {model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class message extends models {}

message.init(
    {
        message_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message_text: {
            type: DataTypes.STRING,
            alllowNull: false,
            validate: {
                len: [1]
            }
        },
        packages_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'client_id'
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'client_id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'message'
    }
);

module.exports = message;