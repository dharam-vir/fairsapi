const {DataTypes} = require('sequelize')
const Sequelize = require('../config/dbConnection')

const OrderPayment = Sequelize.define('orderPayment', {
    id:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true ,autoIncrement:true},
    stripePayment:{type:DataTypes.JSON, allowNull:false},
    orderId:{type:DataTypes.INTEGER, allowNull:false}
})

module.exports = OrderPayment