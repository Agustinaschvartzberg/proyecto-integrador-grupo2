const db=require("../db/objeto")
const db= require('../database/models');
const user= db.Usario;

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
        //const id=req.parms.id
         //user.findByPk(id)
        // .then(function(usuario){
            res.render('profile', {usuario: db.usuario});
       // })
       // .catch(function(err){
           // res.send(err);
       // })

            
        
    }
}

module.exports = userController;