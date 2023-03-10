let express = require('express');
let router = express.Router();
let trasladosController = require ('../controllers/trasladosController');

router.get('/', trasladosController.index);
router.get('/search', trasladosController.search);

module.exports = router;