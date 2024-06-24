const express = require('express');
const router = express.Router();
const searchResultsController = require('../controllers/searchResultsController');


router.get('/', searchResultsController.search);
router.get('/results', searchResultsController.search_results);
router.get('/users', searchResultsController.showResultsForUsuarios);

module.exports = router;
