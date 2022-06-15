const { models, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class packages extends models {}

packages.init(
    {
        washAndVaccuum: {
            type: DataTypes.BOOLEAN
        },
        washAndWax: {
            type: DataTypes.BOOLEAN
        },
        interiorDetail: {
            type: DataTypes.BOOLEAN
        },
        engineBayWash: {
            type: DataTypes.BOOLEAN
        },
        used_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'used_id'
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'packages'
}
);

module.exports = packages;