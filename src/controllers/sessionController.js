const path = require('path');

let sessionController = {
    session: (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../views/session.html"));
}
}

module.exports = sessionController; 