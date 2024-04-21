var db = require('../db/objeto');

var productController = {
    product: function(req, res) {
        res.render('product', {producto: db.productos});
    },
    create: function(req, res) {
<<<<<<< HEAD
        res.render('product-add', {usuario: db.usuario}); 
=======
        res.render('product-add', {usuario: db.usuario});
>>>>>>> 98ff97466a75d01be2f823c2ca8b98632645b805
    }
}

module.exports = productController;