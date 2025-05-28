const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');


const Subscribe = sequelize.define('Subscribe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Prevent duplicate emails
      validate: {
        isEmail: true, // Sequelize built-in email validation
      },
    },
    status: {
      type: DataTypes.ENUM('yes', 'no'),
      defaultValue: 'yes',
    },
  }, {
    tableName: 'subscribe', 
    timestamps: true,       
  });
  
  module.exports = Subscribe;