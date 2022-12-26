let express = require('express');
let router = express.Router();
let sessionController = require ('../controllers/sessionController');

router.get('/', sessionController.session);

module.exports = router;