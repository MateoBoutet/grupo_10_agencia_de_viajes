let express = require('express');
let router = express.Router();
let registerController = require ('../controllers/registerController');

router.get('/',registerController.register);


module.exports = router;