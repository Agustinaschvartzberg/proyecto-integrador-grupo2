const db=require("../database/models")
const bcrypt= require('bcryptjs');


const userController = {
    login: function (req, res) {
      console.log('en login')
      if (res.cookie("usuario") != undefined) {
        return res.redirect("/register");
      }
      res.render("login");
    },
    edit: function (req, res) {
      console.log('en edit')
      res.render("profile-edit");
    },
    profile: function (req, res) {
      const id=req.parms.id
      user.findByPk(id)
      .then(function(usuario){
      res.render("profile", { usuario: usuario });
       })
      .catch(function(err){
      res.send(err);
       })
    },
    login: function (req, res) {
        user
          .findOne({
            where: {
              email: req.body.email,
            },
          })
          .then(function (usuario) {
            if (usuario) {
              if (bcrypt.compareSync(req.body.password, usuario.password)) {
                req.session.usuario = usuario;
                if (req.body.remember) {
                  res.cookie("user", usuario.id, { maxAge: 60000 });
                }
    
                res.redirect("/profile");
              } else {
                res.send("Contraseña incorrecta");
              }
            } else {
              res.send("Usuario no encontrado");
            }
          })
          .catch(function (err) {
            res.send(err);
          });
      },
      logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
      },
  };

  
  module.exports = userController;
  