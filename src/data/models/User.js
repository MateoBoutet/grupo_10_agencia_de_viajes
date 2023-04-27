const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Define el modelo User que representa la tabla users en la base de datos.
const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM('admin', 'user'),
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone: {
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
    console.log(`Error al sincronizar las tablas: ${error}`);
  });

// Exporta el modelo User.
module.exports = User;
