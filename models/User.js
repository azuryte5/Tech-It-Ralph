const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt'); when ready activate

class User extends Model {}

    User.init(
    {
     id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
     },
     username: {
         type: DataTypes.STRING,
         allowNull: false
     },
     password: {
         type:DataTypes.STRING,
         allowNull:false,
         validate: {
             len: [4]}
      }
   },
   {hooks: {
       // hook: this is where bcrypt will go for new and updated users beforeCreate, beforeUpdate
   },
   sequelize,
   timestamps: true,
   freezeTableName: true,
   underscored: true,
   modelName: 'user'
  }
);

module.exports = User;
