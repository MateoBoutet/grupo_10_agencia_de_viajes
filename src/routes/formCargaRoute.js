let express = require('express');
let router = express.Router();
let formCargaController = require ('../controllers/formCargaController.js');
const path = require('path')


router.get('/', formCargaController.formCarga);

module.exports = router;