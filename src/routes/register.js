let express = require('express');
let router = express.Router();
const path = require('path');
let multer = require('multer');
let registerController = require ('../controllers/registerController');

let multerDiskStorage = multer.diskStorage({
    destination: (req,file,callback) => {
        let folder = path.join(__dirname, '../../public/img/profileImages');
        callback(null, folder);
    },
    filename:(req,file,callback)=>{
      let newFileName= Date.now() + path.extname(file.originalname);
      callback(null,newFileName);  
    }
    
});

const upload = multer ({storage:multerDiskStorage});

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
router.post('/', upload.single('imagenUsuario'), validations, registerController.procesoRegister);


module.exports = router;