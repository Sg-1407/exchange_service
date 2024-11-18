const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your database configuration

const ExchangeRequest = sequelize.define('ExchangeRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  borrower_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  exchange_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    allowNull: false,
    defaultValue: 'pending',
  },
}, {
  tableName: 'exchange_requests',
  timestamps: false,
});

module.exports = ExchangeRequest;
