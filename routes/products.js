var express = require("express");
var router = express.Router();

var productController = require("../controllers/productController");

router.get('/detalle/id/:id', productsController.show);
router.get('/add', productsController.add);
router.post("/add", productsController.submit)
router.get("/search", productController.search);
router.post("/search", productController.search_results);
router.post('/delete/:id', productsController.delete)

module.exports = router;
