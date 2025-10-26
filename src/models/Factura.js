const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const User = require('./User');
const Product = require('./Product');

const Factura = sequelize.define('Factura', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  fecha: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },
  total: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
}, {
  tableName: 'facturas',
  timestamps: true,
});

User.hasMany(Factura, { foreignKey: 'userId' });
Factura.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Factura, { foreignKey: 'productId' });
Factura.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Factura;