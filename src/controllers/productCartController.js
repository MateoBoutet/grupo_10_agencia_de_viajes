const path = require('path');

let productCartController = {
    productCart: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/productCart.ejs"));
}
}

module.exports = productCartController;