// models/FooterSetting.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); // Adjust path if needed

const footerModule = sequelize.define('footer-setting', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo_link: {
    type: DataTypes.STRING,
    defaultValue: '/',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
module.exports = footerModule;