const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Define el modelo User que representa la tabla users en la base de datos.
const carrito = sequelize.define('carrito', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pendiente: {
    type: Sequelize.TINYINT(0),
    allowNull: false,
    defaultValue: true
  },
  createdat: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedat: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Sincroniza el modelo carrito con la base de datos.
sequelize.sync({ force: false })
  .then(() => {
    console.log('Conexión a tabla carrito OK');
  })
  .catch((error) => {
    console.log(`Error al sincronizar las tablas: ${error}`);
  });

// Exporta el modelo carrito.
module.exports = carrito;
