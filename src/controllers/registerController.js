const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const { callbackify } = require('util');

const usersFilePath = path.join(__dirname,'../../data/users.json');

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

        const users = JSON.parse (fs.readFileSync(usersFilePath,'utf-8'));

        let usuarioNuevo = {
            id: users[users.length - 1].id + 1,
			firstName: req.body.name,
			lastName: req.body.surname,
            birthdate: req.body.birthdate,
			email: req.body.email,
			password: req.body.password,
			type: req.body.type,
			avatar: req.file ? req.file.filename : "default-image.png",
            telefono: req.body.phone
        }

        users.push(usuarioNuevo);

        fs.writeFileSync(usersFilePath,JSON.stringify(users, null, " "));
        res.redirect('/register');

    }
};

module.exports = registerController;