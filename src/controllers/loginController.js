const path = require('path');
const {validationResult} = require('express-validator');
const User = require('../../models/User');
const usersFilePath = path.join(__dirname,'../../data/users.json');
const bcryptjs = require ('bcryptjs');

let loginController = {
    login: (req, res) => {
        if (req.session.userLogged) {
            return res.redirect('/userProfile');
        }

        res.render(path.resolve(__dirname, "./../views/login.ejs"));
    },

    procesoLogin: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            return res.render (path.resolve(__dirname, "./../views/login.ejs"), {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userToLogin = User.EncontrarPorCampo('email', req.body.email);
        if (userToLogin){
        let passwordOk = bcryptjs.compareSync (req.body.password,userToLogin.password);
            if (passwordOk){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect ('/userProfile');
            }
        }

        return res.render(path.resolve(__dirname, "./../views/login.ejs"), {
            errors: {
                email: {
                    msg:'la contraseña es inválida'
                }
            }
        });
        
        return res.render(path.resolve(__dirname, "./../views/login.ejs"), {
            errors: {
                email: {
                    msg:'El usuario ingresado no se encuentra registrado'
                }
            }
        });

    }
};

module.exports = loginController;