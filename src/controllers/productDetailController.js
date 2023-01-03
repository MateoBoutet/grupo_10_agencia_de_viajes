const path = require('path');

let productDetailController = {
    productDetail: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/productDetail.ejs"));
}
}

module.exports = productDetailController;