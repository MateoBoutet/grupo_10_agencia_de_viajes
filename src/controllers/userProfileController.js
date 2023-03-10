const path = require('path');
const User = require('../data/models/User');


let userProfileController = {
    userProfile: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/userProfile.ejs"));
    },

    profile: (req,res) => {
        if (! req.session.userLogged) {
            return res.redirect ('/login');
        }
        else {
            return res.render (path.resolve(__dirname, "./../views/userProfile.ejs"),{
                user: req.session.userLogged
            });
        }
    },

    logout: (req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }

}



module.exports = userProfileController;