var express = require('express')
let profileController = require('../controllers/profileController');
let profileEditController = require('../controllers/profileEditController')
var router = express.Router(); 

router.get('/:username', profileController.det);




module.exports = router; 