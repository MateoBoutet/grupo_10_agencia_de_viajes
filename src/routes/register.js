let express = require('express');
let router = express.Router();
let registerController = require ('../controllers/registerController');

const {body} = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('El formato de Email debe ser válido'),
    body('name').notEmpty().withMessage('Este campo es obligatorio'),
    body('surname').notEmpty().withMessage('Este campo es obligatorio'),
    body('birthdate').notEmpty().withMessage('Este campo es obligatorio'),
    body('phone').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('debe ingresar sólo numeros'),
    body('password').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres'),
    body('confpassword').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres'),
    body('dni').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('debe ingresar sólo números'),
]

router.get('/',registerController.register);
router.post('/',validations,registerController.procesoRegister);

module.exports = router;