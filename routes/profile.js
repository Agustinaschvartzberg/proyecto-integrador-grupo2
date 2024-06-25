var express = require('express');
let profileController = require('../controllers/profileController');
var router = express.Router(); 

router.get('/:username', profileController.det);

module.exports = router; 