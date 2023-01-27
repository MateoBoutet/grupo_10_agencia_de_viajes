let express = require('express');
let router = express.Router();
let registerController = require ('../controllers/registerController');

const {body} = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('El formato de Email debe ser válido'),
    body('name').notEmpty().withMessage('Este campo es obligatorio'),
    body('surname').notEmpty().withMessage('Este campo es obligatorio'),
    body('birthdate').notEmpty().withMessage('Este campo es obligatorio'),
    body('phone').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('debe ingresar sólo números'),
    body('password').notEmpty().withMessage('Este campo es obligatorio'),
    body('confpassword').notEmpty().withMessage('Este campo es obligatorio'),
    body('dni').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('debe ingresar sólo números'),
]

router.get('/',registerController.register);
router.post('/',validations,registerController.procesoRegister);

module.exports = router;