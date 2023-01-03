const path = require('path');

let sessionController = {
    session: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/session.ejs"));
}
}

module.exports = sessionController; 