let db = require("../database/models");
let op = db.Sequelize.Op; 
const {validationResult} = require("express-validator");
let bcryptjs = require('bcryptjs');

let profileEditController = { 
  
    
    edit: function(req,res){
        if (req.session.usuario == undefined){
            return res.redirect('/users/login')
        }else {
            let id = req.session.usuario.id
            db.User.findByPk(id)
            .then(function(resultado){
        return res.render('profile-edit', {
                    datosUsuario: res.locals.Usuario, lista: db.Producto, comentarios: db.Comentario,})
            })
        }
    },
    modify: function(req, res){
        let form = req.body
        let update = {};

    if (form.nombre) {
  update.nombre = form.nombre;
    }
    if (form.email) {
  updates.email = form.email;
    }
    if (form.dni) {
  updates.dni = form.dni;
    }
    if (form.password) {
  updates.password = bcryptjs.hashSync(form.password, 10);
    }
    if (form.photo) {
        updates.photo = form.photo };

        db.Usuario.update(updates,
         
    {where: {
            id: req.session.usuario.id
        },fields: Object.keys(updates)
      
    })
        
        req.session.destroy()
        res.clearCookie('Galletita') 
        
        return res.redirect('/users/login')
        }
 }


module.exports = profileEditController