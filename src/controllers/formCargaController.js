const path = require('path');

let formCargaController = {
    formCarga: (req, res) => {
        res.render(path.resolve(__dirname, "../views/formCarga.ejs"));
}
}

module.exports = formCargaController;
