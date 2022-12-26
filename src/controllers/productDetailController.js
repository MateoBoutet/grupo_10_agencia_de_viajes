const path = require('path');

let productDetailController = {
    productDetail: (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../views/productDetail.html"));
}
}

module.exports = productDetailController;