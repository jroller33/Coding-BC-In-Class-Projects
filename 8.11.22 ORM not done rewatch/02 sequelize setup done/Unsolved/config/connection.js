const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'library_db',
  'root',
  'myPassword',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
