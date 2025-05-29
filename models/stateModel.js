// models/State.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); // adjust this path to your Sequelize config

const stateModel = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  state_name: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'states',
  timestamps: false,
  underscored: true
});

module.exports = stateModel;
