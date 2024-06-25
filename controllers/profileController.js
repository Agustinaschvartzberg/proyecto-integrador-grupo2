const db = require("../database/models");
const {validationResult} = require("express-validator");
const op = db.Sequelize.Op; 

const profileController = { 
    det: function(req,res){
        let idUsuario = ''
          if (req.session.usuario != undefined){
               idUsuario = req.session.usuario.id
          }
        const username = req.params.username;
            db.Usuario.findOne({
                where: [{nombre:username}],
                include: [{ association: 'productos' }]
                
            }).then(function(unUsuario){
                console.log('estamos en then')
                res.render('profile', {
                    datosUsuario: unUsuario,
                    idUsuario : idUsuario
                }) 
                .catch(function(e){
                     console.log(e);
                    })
            })
},

}

module.exports = profileController