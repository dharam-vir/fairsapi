const { DataTypes } = require('sequelize')
const Sequelize = require('../config/dbConnection')

const Order = Sequelize.define('Order',{
    id:{type:DataTypes.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
    orderDate:{type:DataTypes.DATE, allowNull:false,},
    orderAmount:{type:DataTypes.INTEGER, allowNull:false},
    orderStatus:{type:DataTypes.BOOLEAN , defaultValue:0},
    userId:{type:DataTypes.INTEGER, allowNull:false},
    shippingAddress:{type:DataTypes.JSON, allowNull:false},
    orderedItems:{type:DataTypes.JSON, allowNull:false}
})

module.exports = Order
