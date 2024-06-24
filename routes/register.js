const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')
//const registerValidation = require ('../middlewares/register-validator')


//router.post("/register", registerValidation, registerController.register);
router.post('/store', registerController.store); 
router.get('/', registerController.register);
module.exports = router;