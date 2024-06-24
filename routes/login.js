var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController');
var loginController = require('../controllers/loginController');

router.get('/', loginController.index);
router.post('/', loginController.login);
router.post('/login/store', registerController.store);
router.post('/logout', loginController.logout);

module.exports = router;