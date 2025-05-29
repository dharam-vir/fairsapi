const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); 

const UserFollowingEmployer = sequelize.define('UserFollowingEmployer', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  employer_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'user_following_employers',
  timestamps: false, 
  underscored: true
});

module.exports = UserFollowingEmployer;
