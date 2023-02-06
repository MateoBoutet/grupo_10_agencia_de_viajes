const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const { callbackify } = require('util');
const User = require('../../models/User');
const usersFilePath = path.join(__dirname,'../../data/users.json');
const bcryptjs = require ('bcryptjs');


let registerController = {
    register: (req, res) => {
        res.render(path.resolve(__dirname, "./../views/register.ejs"));
    },
    procesoRegister: (req,res) => {

        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            return res.render (path.resolve(__dirname, "./../views/register.ejs"), {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        if (req.body.password !== req.body.confpassword) {
            return res.render (path.resolve(__dirname, "./../views/register.ejs"), {
                errors: {
                    password: {
                        msg: "El password debe coincidir con la confirmación"
                    },
                    confpassword: {
                        msg: "El password debe coincidir con la confirmación"
                    }
                },
                oldData: req.body
            });
        }

        let usuarioEnDB = User. EncontrarPorCampo('email', req.body.email);

        if (usuarioEnDB) {
            return res.render(path.resolve(__dirname, "./../views/register.ejs"),{
                errors: {
                    email: {
                        msg:'Este usuario ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }

        let usuarioNuevo = {
			firstName: req.body.name,
			lastName: req.body.surname,
            birthdate: req.body.birthdate,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			type: req.body.type,
			avatar: req.file ? req.file.filename : "default-image.png",
            telefono: req.body.phone
        };

        let UsuarioCreado = User.create(usuarioNuevo);

        //users.push(usuarioNuevo);

        //fs.writeFileSync(usersFilePath,JSON.stringify(users, null, " "));
        res.redirect('/login');

    }
};

module.exports = registerController;