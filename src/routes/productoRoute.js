let express = require('express');
let router = express.Router();
let productosController = require ('../controllers/productosConroller');

router.get('/', productosController.productos);
module.exports = router;