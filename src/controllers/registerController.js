const path = require('path');

let registerController = {
    register: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/register.ejs"));
}
}

module.exports = registerController;