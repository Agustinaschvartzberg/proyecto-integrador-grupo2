const db= require('../database/models');
const product= db.Producto;

const productController = {
    product: function(req, res) {
        
            res.render('product', {producto: db.producto})

        },
        create: function(req, res) {
        res.render('product-add');
    }
    }
    


module.exports = productController;