let express = require('express');
let router = express.Router();
let registerController = require ('../controllers/registerController');

const {body} = require('express-validator');

const validations = [
    body('email').notEmpty().bail().withMessage('Este campo es obligatorio').isEmail().withMessage('El formato de Email debe ser válido'),
    body('name').notEmpty().withMessage('Este campo es obligatorio'),
    body('surname').notEmpty().withMessage('Este campo es obligatorio'),
    body('birthdate').notEmpty().withMessage('Este campo es obligatorio'),
    body('phone').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio'),
    body('confpassword').notEmpty().withMessage('Este campo es obligatorio'),
]

router.get('/',registerController.register);
router.post('/',validations,registerController.procesoRegister);

module.exports = router;