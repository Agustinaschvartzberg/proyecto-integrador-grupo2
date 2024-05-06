//const db= require('../database/models');
//const movies= db.Movie;


var db = require('../db/objeto');

var productController = {
    product: function(req, res) {
        res.render('product', {producto: db.productos});
    },
    create: function(req, res) {
        res.render('product-add', {usuario: db.usuario});
    }
}

module.exports = productController;