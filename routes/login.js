const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginValidation = require ('../middlewares/loginValidator') //middelwares

router.get('/', loginValidation, userController.login);
router.post('/store', userController.loginStore);
module.exports = router;