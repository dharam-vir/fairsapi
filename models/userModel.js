const { DataTypes } = require('sequelize')
const Sequelize = require('../config/dbConnection')

const User= Sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }, 
    fs_admin_ID:{type:DataTypes.INTEGER,allowNull:true},  
    user_type:{type:DataTypes.STRING, defaultValue:'user'},  
    name:{type:DataTypes.STRING, allowNull:true},
    lname:{type:DataTypes.STRING, allowNull:true},
    username:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false,unique:true},
    email_verified_at:{type:DataTypes.STRING, allowNull:true},
    remember_token:{type:DataTypes.STRING, allowNull:true},
    password:{type:DataTypes.STRING, allowNull:false},
    mobilno:{type:DataTypes.STRING, allowNull:true},
    term:{type:DataTypes.BOOLEAN, defaultValue:1},
    pincode:{type:DataTypes.STRING, allowNull:true},    
    profileImage:{type:DataTypes.STRING, allowNull:true},    
    gender:{type:DataTypes.ENUM('male', 'female', 'non-binary', 'other'), allowNull:false},
    birthdate:{type: DataTypes.DATE,allowNull: true,},
    facebookProfile:{type:DataTypes.STRING, allowNull:true},
    twitterProfile:{type:DataTypes.STRING, allowNull:true},
    linkedinProfile:{type:DataTypes.STRING, allowNull:true},
    status:{type: DataTypes.ENUM,values: ['yes','no'],defaultValue:'yes'},
    resetPasswordToken:{type:DataTypes.STRING, allowNull:true , defaultValue:''}
});

module.exports=User; 