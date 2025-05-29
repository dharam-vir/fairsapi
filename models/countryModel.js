const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const countryModel = sequelize.define('countries',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status:{
        type: DataTypes.ENUM,
        values: ['yes','no'],
        defaultValue:'yes'}    
})

module.exports = countryModel;