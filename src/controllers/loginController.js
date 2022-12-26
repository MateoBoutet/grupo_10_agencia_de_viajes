const path = require('path');

let loginController = {
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../views/login.html"));
}
}

module.exports = loginController;