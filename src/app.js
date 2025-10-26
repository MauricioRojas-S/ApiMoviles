const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// Importar modelos para sincronización
const Product = require('./models/Product');
const User = require('./models/User');
const Classes = require('./models/Classes');
const Factura = require('./models/Factura');

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const classesRoutes = require('./routes/classesRoutes');
const facturaRoutes = require('./routes/facturaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite al servidor entender JSON en el body de las peticiones

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/classes', classesRoutes);
app.use('/api/factura', facturaRoutes);

// Función para iniciar el servidor y sincronizar la base de datos
async function startServer() {
try {
// Sincroniza los modelos con la base de datos.
// { force: false } evita que las tablas se borren y recreen en cada reinicio.
// Usar { force: true } durante el desarrollo si necesitas reiniciar la BD.
await sequelize.sync({ force: false });
console.log('Base de datos sincronizada correctamente.');
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
} catch (error) {
console.error('Error al iniciar el servidor:', error);
}
}
startServer();