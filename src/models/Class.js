const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const Class = sequelize.define('Class', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  descripcion: { 
    type: DataTypes.TEXT 
  },
  precio: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  }
}, {
  tableName: 'class',
  timestamps: true,
});

module.exports = Class;