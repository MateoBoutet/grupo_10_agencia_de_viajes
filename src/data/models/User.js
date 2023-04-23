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
  telefono: {
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


/* // Importamos los módulos de sequelize y DataTypes
const { DataTypes } = require('sequelize');

// Importamos la instancia de sequelize
const sequelize = require('../database');

// Creamos un modelo de usuario (User) con sus atributos
const User = sequelize.define('User', {
    // Primer nombre del usuario, de tipo string con un máximo de 50 caracteres, no puede ser nulo
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    // Apellido del usuario, de tipo string con un máximo de 50 caracteres, no puede ser nulo
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    // Fecha de nacimiento del usuario, de tipo date sin hora, no puede ser nulo
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    // Correo electrónico del usuario, de tipo string con un máximo de 100 caracteres, no puede ser nulo y debe ser único
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    // Contraseña del usuario, de tipo string con un máximo de 60 caracteres, no puede ser nulo
    password: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    // Tipo de usuario, puede ser 'admin' o 'user', no puede ser nulo y su valor por defecto es 'user'
    type: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user',
    },
    // Avatar del usuario, de tipo string con un máximo de 100 caracteres, no puede ser nulo y su valor por defecto es 'default-image.png'
    avatar: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'default-image.png',
    },
    // Número de teléfono del usuario, de tipo string con un máximo de 20 caracteres, puede ser nulo
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
}, {
    // Nombre de la tabla en la base de datos
    tableName: 'users',
    // Incluir los timestamps de creación y actualización en cada registro
    timestamps: true,
    // Nombre de la columna para el timestamp de creación
    createdAt: 'created_at',
    // Nombre de la columna para el timestamp de actualización
    updatedAt: 'updated_at',
});

// Exportamos el modelo User para usarlo en otras partes de la aplicación
module.exports = User;
 */