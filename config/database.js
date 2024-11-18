const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('exchange_service', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
