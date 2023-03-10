let express = require('express');
let router = express.Router();
let indexController = require ('../controllers/indexController');

router.get('/', indexController.index);
router.get('/search', indexController.search);

module.exports = router;