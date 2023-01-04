let express = require('express');
let router = express.Router();
let formCargaController = require ('../controllers/formCargaController.js');

router.get('/', formCargaController.formCarga);

module.exports = router;