const { DataTypes} = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define(
    'User', //nome da entidade
    { //coleção de campos da tabela User
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        email : {
            type : DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmai: true } 
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname:{
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        profilePic :{
            type: DataTypes.STRING(100),
            allowNull : true,
            defaultValue : 'default-profile.png'
        },
        isBlocked : {
            type  : DataTypes.BOOLEAN,
            defaultValue : false
        },
        isAdmin : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        }
    },
    {
        tableName : 'users',
        timestamps : true
    }
);

module.exports = User;