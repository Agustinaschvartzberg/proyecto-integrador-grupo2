var express = require("express");
var router = express.Router();

var productController = require("../controllers/productController");

router.get('/detalle/id/:id', productsController.show);
router.get('/add', productsController.add);
router.post("/add", productsController.submit)
router.post('/delete/:id', productsController.delete);
router.get('/modify/:id', productsController.modify)
router.post('/modify/:id', productsController.modificado)

module.exports = router;
