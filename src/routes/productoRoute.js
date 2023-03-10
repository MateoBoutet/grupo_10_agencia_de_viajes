let express = require('express');
let router = express.Router();
let productosController = require('../controllers/productosConroller');

router.get('/', productosController.productos);
router.get('/search', productosController.search);

router.get('/formCarga/', productosController.formCarga);
router.get('/modifProducto', productosController.modifProducto);
router.get('/detail/:id', productosController.productDetail);
router.get('/deleteProducto', productosController.deleteView);

router.post('/formCarga/create', productosController.create);
router.post('/modifProducto/update', productosController.update);
router.post('/deleteProducto/delete', productosController.delete);

module.exports = router;