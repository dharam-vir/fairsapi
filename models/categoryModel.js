const { DataTypes } = require('sequelize');
const Sequelize = require('../config/dbConnection')

const Category = Sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING(255), 
    allowNull: false,
    unique: true
  },
   job_count: {
    type: DataTypes.INTEGER,
    defaultValue: '0',    
  },  
  url: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  imagePath: {
    type: DataTypes.STRING(500), 
    allowNull: true,
  },
  cssClassName: {
    type: DataTypes.STRING(100), 
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING(255), 
    allowNull: true,
  },
  description: {  
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  keyword: {
    type: DataTypes.STRING(255), 
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('yes', 'no'),  
    defaultValue: 'yes',  
    allowNull: false,     
  }
});

module.exports = Category;
