const { DataTypes} = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define(
    'User', //nome da tabela dentro do BD MySQL
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
        }
    }
);

module.exports = User;