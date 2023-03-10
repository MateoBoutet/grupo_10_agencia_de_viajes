let express = require('express');
let router = express.Router();
let vuelosController = require ('../controllers/vuelosController');

router.get('/', vuelosController.index);
router.get('/search', vuelosController.search);

module.exports = router;