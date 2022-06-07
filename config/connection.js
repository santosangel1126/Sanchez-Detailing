const Sequelize = require('sequelize');
const { extensions } = require('sequelize/types/utils/validator-extras');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  }
);extensions

module.exports = sequelize;