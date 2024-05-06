//const db= require('../database/models');
//const movies= db.Movie;

const db = require('../db/objeto');

const userController = {
    login: function(req, res) {
        res.render('login');
    },
    edit: function(req, res) {
        res.render('profile-edit');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        
        res.render('profile', {usuario: db.usuario});
    }
}

module.exports = userController;