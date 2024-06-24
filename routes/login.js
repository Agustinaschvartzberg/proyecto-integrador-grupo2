const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.login);
router.post('/store', userController.loginStore);
module.exports = router;