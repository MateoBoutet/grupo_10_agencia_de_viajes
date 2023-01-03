const path = require('path');

let indexController = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/index.ejs"));
}
}

module.exports = indexController;
