const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Option = sequelize.define('Option', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  option_key: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  option_value: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'options',
  timestamps: false, 
  underscored: true
});

module.exports = Option;
