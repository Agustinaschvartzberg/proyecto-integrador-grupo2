var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/profile', userController.profile);

router.get('/profile-edit', userController.edit);

module.exports = router;
