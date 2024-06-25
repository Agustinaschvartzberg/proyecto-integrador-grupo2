var express = require('express');
let profileEditController = require('../controllers/profileEditController');
var router = express.Router(); 
const profileEditValidation=require ("../middlewares/profileEdit");

router.get('/',profileEditValidation, profileEditController.edit);
router.post('/', profileEditController.modify);


module.exports = router; 