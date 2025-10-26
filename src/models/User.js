const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
tableName: 'users',
timestamps: true // Agrega los campos createdAt y updatedAt automáticamente
});
module.exports = User;