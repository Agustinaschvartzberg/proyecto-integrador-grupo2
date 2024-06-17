var express = require("express");
var router = express.Router();

var productController = require("../controllers/productController");

router.get("/product", productController.product);

router.get("/product-add", productController.create);

router.get("/search", productController.search);
router.post("/search", productController.search_results);

module.exports = router;


