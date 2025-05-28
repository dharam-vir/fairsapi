const {DataTypes} = require('sequelize')
const Sequelize = require('../config/dbConnection')
const User = require('./userModel')

const Address = Sequelize.define("Address",{
    id:{type:DataTypes.INTEGER.UNSIGNED, allowNull:false, primaryKey:true, autoIncrement:true},
    currentAddress:{type:DataTypes.STRING, allowNull:false},
    address:{type:DataTypes.STRING, allowNull:false},
    city:{type:DataTypes.STRING, allowNull:false},
    state:{type:DataTypes.STRING, allowNull:false},
    locality:{type:DataTypes.STRING, allowNull:false},
    landmark:{type:DataTypes.STRING, allowNull:false},
    alternatePhone:{type:DataTypes.STRING, allowNull:true},
    addressType:{type:DataTypes.STRING, allowNull:false},
    userId:{type:DataTypes.INTEGER, allowNull:false}
})

// Establishing the relationship
Address.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Address