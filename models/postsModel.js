const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); 

const postModel = sequelize.define('Post', {
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
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  post_content: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  feature_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  type: {
    type: DataTypes.ENUM('post', 'page'),
    defaultValue: 'post'
  },
  status: {
    type: DataTypes.ENUM('0', '1', '2'),
    defaultValue: '0'
  },
  show_in_header_menu: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  show_in_footer_menu: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
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
  tableName: 'posts',
  timestamps: false,
  underscored: true
});

module.exports = postModel;
