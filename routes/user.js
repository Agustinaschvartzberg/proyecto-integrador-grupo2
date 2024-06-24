var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
const registerController = require('../controllers/registerController');

router.get('/', loginController.index);
router.post('/', loginController.login);
router.post('/logout', loginController.logout);


module.exports = router;