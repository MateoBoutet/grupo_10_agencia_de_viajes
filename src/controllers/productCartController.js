const path = require('path');
const carrito = require('../data/models/carrito');


/* let productCartController = {
    productCart: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/productCart.ejs"));
}
} */

const productCartController = {
    // Este método se encarga de mostrar la vista de registro del carrito
    productCart: function(req, res) {
      res.render(path.resolve(__dirname, "./../views/productCart.ejs"));
    },
  
    // Este método se encarga de procesar la información del formulario de agregar carrito
    process: function(req, res) {
      // Validamos los campos del formulario usando la función validationResult de express-validator
      const errors = validationResult(req);
  
      // Si no hay errores de validación, creamos un nuevo usuario en la base de datos
      if(errors.isEmpty()) {
          carrito.create({
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            pendiente: req.body.pendiente
            })
        // Si se crea el usuario exitosamente, redirigimos al usuario a la página de inicio de sesión
        .then(function() {
          console.log('Registro de usuario nuevo exitoso');
          return res.redirect('/login');
        })
        // Si ocurre un error al crear el usuario, lo mostramos en la consola
        .catch(function(error) {
          console.log('No se registraron datos en la BD');
          console.log(error);
        });
      } else {
          // Si hay errores de validación, renderizamos la vista de registro y mostramos los errores al usuario
          console.log(errors);
          res.render(path.resolve(__dirname, "./../views/register.ejs"), 
          { errors: errors.errors, old: req.body });
      }
    }
  };

module.exports = productCartController;