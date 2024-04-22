var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/profile', userController.profile);

router.get('/profile-edit', userController.edit);

module.exports = router;