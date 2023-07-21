const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define("User",{
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;