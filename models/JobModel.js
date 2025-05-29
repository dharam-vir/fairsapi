// models/Job.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Your Sequelize instance

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  job_title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  job_slug: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING(190),
    allowNull: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_any_where: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  salary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  salary_upto: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  is_negotiable: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  salary_cycle: {
    type: DataTypes.ENUM('monthly', 'yearly', 'weekly', 'daily', 'hourly'),
    allowNull: true,
  },
  salary_currency: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  vacancy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'transgender', 'any'),
    allowNull: false,
  },
  job_type: {
    type: DataTypes.ENUM('full_time', 'part_time', 'contract', 'temporary', 'commission', 'internship'),
    defaultValue: 'full_time',
  },
  exp_level: {
    type: DataTypes.ENUM('mid', 'entry', 'senior'),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  responsibilities: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  educational_requirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  experience_requirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  additional_requirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  apply_instruction: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  country_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  state_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  city_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  experience_required_years: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  experience_plus: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  approved_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
  job_id: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  is_premium: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
});

module.exports = Job;
