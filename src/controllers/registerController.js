const path = require('path');
const {validationResult} = require('express-validator');


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
    }    
}

module.exports = registerController;