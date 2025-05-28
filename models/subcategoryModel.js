const { DataTypes } = require('sequelize')
const Sequelize = require('../config/dbConnection')

const Subcategory = Sequelize.define("Subcategory",{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true,allowNull:false},
    subCategoryName:{type:DataTypes.STRING,allowNull:false},
    categoryId:{type:DataTypes.INTEGER,allowNull:false}
})

module.exports = Subcategory