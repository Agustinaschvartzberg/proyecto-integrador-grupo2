const db = require("../database/models");
const {validationResult} = require("express-validator");
const op = db.Sequelize.Op; 

const profileController = { 
    det: function(req,res){
        let idUsuario = ''
          if (req.session.usuario != undefined){
               idUsuario = req.session.userario.id
          }
        const username = req.params.username;
            db.Usuario.findOne({
                where: [{username:username}],
                include: [{ association: 'productos' }]
                
            }).then(function(unUsuario){
                return res.render('profile', {
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