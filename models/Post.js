const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt'); when ready activate

class Post extends Model {}

    Post.init(
    {
    id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
   },
   {hooks: {
       // hook: this is where bcrypt will go for new and updated users beforeCreate, beforeUpdate
   },
   sequelize,
   timestamps: true,
   freezeTableName: true,
   underscored: true,
   modelName: 'post'
  }
);

module.exports = Post;