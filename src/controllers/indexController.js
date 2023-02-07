const path = require('path');

let indexController = {
    index: (req, res) => {
        console.log(1)
        res.render(path.resolve(__dirname, "./../views/index.ejs"));
}
}

module.exports = indexController;
