const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');


const paymentsModel = sequelize.define('payment', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    package_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    package_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    premium_job: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('initial', 'pending', 'success', 'failed', 'declined', 'dispute'),
      defaultValue: 'initial',
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    token_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_last4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_brand: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_exp_month: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_exp_year: {
      type: DataTypes.STRING,
      allowNull: true
    },
    client_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    charge_id_or_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payer_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    local_transaction_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payment_created: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bank_swift_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    branch_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iban: {
      type: DataTypes.STRING,
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
    tableName: 'payments',
    timestamps: false,
    underscored: true
  })

module.exports = paymentsModel

