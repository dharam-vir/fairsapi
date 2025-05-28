const { DataTypes } = require('sequelize')
const Sequelize = require('../config/dbConnection')


const OrderDetail = Sequelize.define("OrderDetail",{
    id:{type:DataTypes.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
    orderId:{type:DataTypes.INTEGER, allowNull:false}
})

module.exports = OrderDetail