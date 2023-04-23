const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const User = require("../data/models/User");
const bcryptjs = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

let loginController = {
    login: (req, res) => {
        if (req.session.userLogged) {
            return res.redirect("/userProfile");
        }

        res.render(path.resolve(__dirname, "./../views/login.ejs"));
    },

    procesoLogin: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.resolve(__dirname, "./../views/login.ejs"), {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userToLogin = users.find((user) => user.email == req.body.email);
        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );

            if (passwordOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect("/userProfile");
            }
        }

        return res.render(path.resolve(__dirname, "./../views/login.ejs"), {
            errors: {
                password: {
                    msg: "Usuario o contraseña inválidos",
                },
            },
        });
    },
};

module.exports = loginController;
