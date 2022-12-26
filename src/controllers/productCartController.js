const path = require('path');

let productCartController = {
    productCart: (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../views/productCart.html"));
}
}

module.exports = productCartController;