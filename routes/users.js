var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
const registerController = require('../controllers/registerController');

router.get('/login', userController.login);

router.get('/register', registerController.register);

router.get('/profile', userController.profile);

router.get('/profile-edit', userController.edit);

router.post('/register/store', registerController.store);

module.exports = router;