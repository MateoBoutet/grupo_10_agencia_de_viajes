const path = require('path');

let productosController = {
    productos: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/paquetes.ejs"));
}
}

module.exports = productosController;