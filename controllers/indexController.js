const db= require('../database/models');

const indexController = {
    index: function(req, res) {
        db.Producto.findAll({})
           .then(function(product) {
                res.render('index', { productos: productos })
            })
           .catch(function(error) {
                console.log(error)
            })
    }, 
    search: function(req, res) {
        res.render('search-results')
    }
};

module.exports = indexController;