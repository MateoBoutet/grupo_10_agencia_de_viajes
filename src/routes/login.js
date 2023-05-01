let express = require('express');
let router = express.Router();
let loginController = require ('../controllers/loginController');
const {body} = require('express-validator');


const validations = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('El formato de Email debe ser válido'),
    body('password').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min:4}).withMessage('la contraseña debe tener al menos 4 caracteres'),
]

router.get('/', loginController.login);
router.post('/',validations,loginController.procesoLogin);


module.exports = router;