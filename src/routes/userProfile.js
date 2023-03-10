let express = require('express');
let router = express.Router();
let userProfileController = require ('../controllers/userProfileController');

router.get('/', userProfileController.profile);
router.get('/logout', userProfileController.logout);

module.exports = router;