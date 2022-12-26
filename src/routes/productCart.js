let express = require('express');
let router = express.Router();
let productCartController = require ('../controllers/productCartController');

router.get('/', productCartController.productCart);

module.exports = router;