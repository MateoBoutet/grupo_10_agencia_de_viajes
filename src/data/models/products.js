const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Define el modelo User que representa la tabla users en la base de datos.
const products = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  origen: {
    type: Sequelize.STRING,
    allowNull: false
  },
  destino: {
    type: Sequelize.STRING,
    allowNull: false
  },
  precio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  periodo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imagen: {
    type: Sequelize.STRING,
    allowNull: false
  },
  traslado: {
    type: Sequelize.STRING,
    allowNull: false
  },
  alojamiento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  habitacion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dias: {
    type: Sequelize.STRING,
    allowNull: false
  },
  oferta: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Sincroniza el modelo User con la base de datos.
sequelize.sync({ force: false })
  .then(() => {
    console.log('Conexión a DB Exitosa');
  })
  .catch((error) => {
    console.log(`Error al sincronizar las products: ${error}`);
  });

// Exporta el modelo User.
module.exports = products;
