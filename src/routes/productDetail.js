let express = require('express');
let router = express.Router();
let productDetailController = require ('../controllers/productDetailController');

router.get('/', productDetailController.productDetail);
module.exports = router;