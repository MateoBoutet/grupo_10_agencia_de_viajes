let express = require('express');
let router = express.Router();
let productosController = require ('../controllers/productosConroller');

router.get('/', productosController.productos);

router.get('/formCarga/', productosController.create);
router.post('/modifProducto', productosController.processCreate);

router.get('/modifProducto', productosController.modif);
router.get('/:id/edit', productosController.edit);
router.put('/:id', productosController.update);

router.delete('/:id/delete', productosController.delete);

router.get('/detail/:id', productosController.productDetail);




module.exports = router;