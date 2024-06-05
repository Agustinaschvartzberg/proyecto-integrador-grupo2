const db= require('../database/models');
//const movies= db.Movie;

const indexController = {
    index: function(req, res) {
        res.render('index');
    },
    search: function(req, res) {
        res.render('search-results');
    }
}

module.exports = indexController;