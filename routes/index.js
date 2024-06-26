var express = require('express');
var router = express.Router();

var indexController = require("../controllers/indexController");

router.get('/', indexController.index);
router.get('/index', indexController.index);

module.exports = router;
