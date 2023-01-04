let express = require('express');
let router = express.Router();
let modifProducProducController = require ('../controllers/formEdicionProductoController.js');

router.get('/', modifProducProducController.modifProduc);

module.exports = router;