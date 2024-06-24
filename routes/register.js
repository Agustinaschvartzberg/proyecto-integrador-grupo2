const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')


router.post('/store', registerController.store); //Guarda al usuario en la base de datos.
router.get('/', registerController.register);
module.exports = router;