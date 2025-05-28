const { DataTypes } = require('sequelize');
const Sequelize = require('../config/dbConnection')

const Client = Sequelize.define("client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_id: {
    type: DataTypes.STRING,  // You may want to consider if this should be an INTEGER or a STRING based on your DB schema
    allowNull: false,
  },
  client_name: {
    type: DataTypes.STRING(255),  // Optional: Specify a length for the client name
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255), // Optional: Specify a length for the email
    allowNull: false,  // Make sure email is always provided
    validate: {
      isEmail: true,  // This ensures the email is in a valid format
    },
  },
  message: {
    type: DataTypes.STRING(500),  // Optional: You can set a reasonable length for the message
    defaultValue: '',  // Set to empty string if you don't want it to be null
    validate: {
      len: [50, 500],  // This ensures the message length is between 50 and 500 characters
    },
  },
  status: {
    type: DataTypes.ENUM('yes', 'no'),
    defaultValue: 'yes',  // Default value is 'yes'
    allowNull: false,  // Ensure status is always either 'yes' or 'no'
  },
});

module.exports = Client;
