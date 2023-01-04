const path = require('path');

let modifProducController = {
    modifProduc: (req, res) => {
        res.render(path.resolve(__dirname, "../views/formCarga.ejs"));
}
}

module.exports = modifProducController;