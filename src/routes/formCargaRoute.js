let express = require('express');
let router = express.Router();
const path = require('path');
let multer = require('multer');
let productosConroller = require ('../controllers/productosConroller.js');

let multerDiskStorage = multer.diskStorage({
    destination: (req,file,callback) => {
        let folder = path.join(__dirname, '../../public/img/paquetes');
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
    body('origen').notEmpty().withMessage('Este campo es obligatorio').
    body('destino').notEmpty().withMessage('Este campo es obligatorio'),
    body('precio').notEmpty().withMessage('Este campo es obligatorio'),
    body('periodo').notEmpty().withMessage('Este campo es obligatorio'),
    body('traslado').notEmpty().withMessage('Este campo es obligatorio'),
    body ('alojamiento').notEmpty().withMessage('Debes seleccionar una opción'),
    body ('habitacion').notEmpty().withMessage('Debes seleccionar una opción'),
    body ('dias').notEmpty().withMessage('Debes seleccionar una opción'),
    body ('oferta').notEmpty().withMessage('Debes seleccionar una opción'),
    body ('imagen').custom ((value,{req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png'];

        if (!file){
            throw new Error ('Debes adjuntar una imagen');
        } else {
            let fileExtension = path.extname (file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`); 
            }
        }
        return true;
    })
]

router.get('/', productosConroller.show);
router.post('/', upload.single('imagen'), validations, productosConroller.process);


module.exports = router;