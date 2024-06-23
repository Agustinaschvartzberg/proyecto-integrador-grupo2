var express = require('express')
let profileEditController = require('../controllers/profileEdit')
var router = express.Router(); 

router.get('/', profileEditController.edit);
router.post('/', profileEditController.modify);




module.exports = router; 