const path = require("path");

let sessionController = {
    session: (req, res) => {
        if (!req.session.userLogged) {
            return res.render(
                path.resolve(__dirname, "./../views/session.ejs")
            );
        } else {
            return res.render(
                path.resolve(__dirname, "./../views/userProfile.ejs"),
                {
                    user: req.session.userLogged,
                }
            );
        }
    },
};

module.exports = sessionController;
