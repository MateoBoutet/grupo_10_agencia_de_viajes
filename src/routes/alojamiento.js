let express = require('express');
let router = express.Router();
let alojamientoController = require ('../controllers/alojamientoController');

router.get('/', alojamientoController.index);
router.get('/search', alojamientoController.search);

module.exports = router;