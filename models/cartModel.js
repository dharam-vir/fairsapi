const {DataTypes} = require('sequelize')
const Sequelize = require('../config/dbConnection')

const Cart = Sequelize.define('Cart', {
    id:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true, autoIncrement:true},
    userId:{type:DataTypes.INTEGER,allowNull:false},
    productId:{type:DataTypes.INTEGER,allowNull:false},
    productName:{type:DataTypes.STRING,allowNull:false},
    productPrice:{type:DataTypes.FLOAT,allowNull:false},
    productDiscountPrice:{type:DataTypes.FLOAT, allowNull:false},
    productQuantity:{type:DataTypes.FLOAT,allowNull:false},
    productImage:{type:DataTypes.STRING,allowNull:false}
})

module.exports = Cart