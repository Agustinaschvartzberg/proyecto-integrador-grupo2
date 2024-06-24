var express = require('express');
var router = express.Router();

var usersController = require('../controllers/userController');
const registerController = require('../controllers/registerController');

router.get('/login', usersController.login);
router.get('/register', registerController.register);
router.get('/profile', usersController.profile);
router.get('/profile-edit', usersController.edit);
router.post('/register/store', registerController.store);

module.exports = router;