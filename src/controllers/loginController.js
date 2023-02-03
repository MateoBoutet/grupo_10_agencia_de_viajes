const path = require('path');
const {validationResult} = require('express-validator');

let loginController = {
    login: (req, res) => {
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
}  


}

module.exports = loginController;