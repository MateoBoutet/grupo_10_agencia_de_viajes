const path = require('path');

let indexController = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../views/index.html"));
}
}

module.exports = indexController;
