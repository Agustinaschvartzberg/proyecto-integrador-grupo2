const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const loginValidation = require ('../middlewares/login-validator') //middelwares

router.get('/', userController.login);
//router.post("/register", loginValidation,userController.login);
router.post('/store', userController.loginStore);
module.exports = router;