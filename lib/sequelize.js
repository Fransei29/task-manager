const { Sequelize } = require('sequelize');

// Configuring Sequelize Using Environment Variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false, // Cambia esto según tu configuración
},
  logging:false,
  port: process.env.DB_PORT || 5432,
});

module.exports = sequelize;
