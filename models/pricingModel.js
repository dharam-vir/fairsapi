const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); 

const pricingModel = sequelize.define('Pricing', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  package_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(16, 2),
    allowNull: true
  },
  premium_job: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
}, {
  tableName: 'pricings',
  timestamps: false,
  underscored: true
});

module.exports = pricingModel;
