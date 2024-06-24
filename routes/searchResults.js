var express = require('express');
var router = express.Router();
let searchResultsController = require('../controllers/searchResults')

router.get('/', searchResultsController.search);
router.get('/', searchResultsController.search_results);

router.get('/users', searchResultsController.showReultsforUsuarios)
module.exports = router;