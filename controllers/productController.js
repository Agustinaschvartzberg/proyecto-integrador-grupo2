const db=require("../db/objeto")
const db= require('../database/models');
const product= db.Producto;

const productController = {
    product: function(req, res) {
        //producto.findAll.then(function(producto){
            res.render('product', {producto: db.producto})

        },
        create: function(req, res) {
        res.render('product-add');
    }
    }
    


module.exports = productController;