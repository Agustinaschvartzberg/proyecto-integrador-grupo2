const db = require("../database/models");
const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');


const userController = {
  // login: function (req, res) {
  //   console.log('en login')
  //   if (res.cookie("usuario") != undefined) {
  //     return res.redirect("/register");
  //   }
  //   res.render("login");
  // },
  edit: function (req, res) {
    console.log('en edit');
    res.render("profile-edit");
  },
  profile: function (req, res) {
    const id = req.parms.id;
    db.Usuario.findByPk(id)
      .then(function (usuario) {
        res.render("profile", { usuario: usuario });
      })
      .catch(function (err) {
        res.send(err);
      });
  },
  login: function (req, res) {
    res.render('login');
  },
  loginStore: function (req, res) {
    console.log('Iniciando función de login');
    console.log('Buscando usuario con email:', req.body.email);
    db.Usuario
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .then(function (usuario) {
        if (usuario) {
          console.log('Usuario encontrado:', usuario);

          if (bcrypt.compareSync(req.body.password, usuario.password)) {
            console.log('Contraseña correcta');

            req.session.usuario = usuario;
            console.log('Sesión iniciada para el usuario:', usuario.id);

            if (req.body.remember) {
              res.cookie("user", usuario.id, { maxAge: 60000 });
              console.log('Cookie "user" creada para el usuario:', usuario.id);
            }

            console.log('Redirigiendo a /profile');
            res.redirect("/profile");
          } else {
            console.log('Contraseña incorrecta');
            res.send("Contraseña incorrecta");
          }
        } else {
          console.log('Usuario no encontrado');
          res.send("Usuario no encontrado");
        }
      })
      .catch(function (err) {
        console.log('Error al buscar el usuario:', err);
        res.send(err);
      });
  },
  logout: function (req, res) {
    res.session.destroy();
    res.clearCookie("user");
    res.redirect("/");
  },
};


module.exports = userController;
