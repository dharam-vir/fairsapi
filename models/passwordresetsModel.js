const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

  const passwordresetsModel = sequelize.define('PasswordReset', {
    email: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, {
    tableName: 'password_resets',
    timestamps: false, 
    underscored: true
  });

  module.exports = passwordresetsModel;
