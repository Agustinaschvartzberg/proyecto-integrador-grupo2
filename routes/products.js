var express = require("express");
var router = express.Router();

var productController = require("../controllers/productController");

router.get('/detalle/id/:id', productController.show);
router.get('/add', productController.add);
router.post("/add", productController.submit)
router.post('/delete/:id', productController.delete);
router.get('/modify/:id', productController.modify)
router.post('/modify/:id', productController.modificado)

module.exports = router;
