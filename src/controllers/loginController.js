const path = require('path');

let loginController = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/login.ejs"));
}
}

module.exports = loginController;