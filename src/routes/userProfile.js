let express = require('express');
let router = express.Router();
let userProfileController = require ('../controllers/userProfileController');

router.get('/', userProfileController.profile);
router.get('/', userProfileController.logout);

module.exports = router;