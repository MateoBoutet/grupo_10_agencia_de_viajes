const path = require('path');
const User = require('../data/models/carrito');


let productCartController = {
    productCart: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/productCart.ejs"));
}
}

module.exports = productCartController;