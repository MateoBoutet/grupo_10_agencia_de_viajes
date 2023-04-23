// Importamos el módulo bcrypt para encriptar la contraseña de usuario
const bcrypt = require('bcryptjs');
// Importamos la función validationResult de express-validator para validar los campos del formulario de registro
const { validationResult } = require('express-validator');
// Importamos el módulo path para resolver la ruta de la vista de registro
const path = require("path");

// Importamos el modelo User para poder crear nuevos usuarios en la base de datos
const User = require('../data/models/User');

// Creamos un objeto que contiene los métodos que se encargan de mostrar el formulario de registro y procesar la información del mismo
const registerController = {
  // Este método se encarga de mostrar la vista de registro al usuario
  show: function(req, res) {
    res.render(path.resolve(__dirname, "./../views/register.ejs"));
  },

  // Este método se encarga de procesar la información del formulario de registro
  process: function(req, res) {
    // Validamos los campos del formulario usando la función validationResult de express-validator
    const errors = validationResult(req);

    // Si no hay errores de validación, creamos un nuevo usuario en la base de datos
    if(errors.isEmpty()) {
      User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        // Encriptamos la contraseña antes de guardarla en la base de datos usando el método hashSync de bcrypt
        password: bcrypt.hashSync(req.body.password, 10),
        birthdate: req.body.birthdate,
        dni: req.body.dni,
        phone: req.body.phone,
        type: req.body.type,
        image: req.file.filename
      })
      // Si se crea el usuario exitosamente, redirigimos al usuario a la página de inicio de sesión
      .then(function() {
        return res.redirect('/login');
      })
      // Si ocurre un error al crear el usuario, lo mostramos en la consola
      .catch(function(error) {
        console.log('No se registraron datos en la BD');
        console.log(error);
      });
    } else {
        // Si hay errores de validación, renderizamos la vista de registro y mostramos los errores al usuario
        res.render(path.resolve(__dirname, "./../views/register.ejs"), 
        { errors: errors.errors, old: req.body });
    }
  }
};

// Exportamos el objeto registerController para que pueda ser usado en otras partes de la aplicación
module.exports = registerController;

