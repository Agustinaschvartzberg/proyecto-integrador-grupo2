const db=require("../database/models")
const db= require('bcryptjs');
const user= db.Usario;

const userController = {
    login: function (req, res) {
      if (res.cookie("user") != undefined) {
        return res.redirect("/register");
      }
      res.render("login");
    },
    edit: function (req, res) {
      res.render("profile-edit");
    },
    register: function (req, res) {
      if (res.cookie("user") != undefined) {
        return res.redirect("/profile");
      }
      res.render("register");
    },
    store: function (req, res) {
      const data = req.body;
      const escryptedPassword = bcrypt.hashSync(data.password, 10);
      const newUser = {
        nombre: data.name,
        email: data.email,
        password: data.escryptedPassword,
        fecha: data.birthDate,
        dni: data.dni,
        foto: data.foto,
      };
      db.usuario
        .create(newUser)
        .then(function () {
          res.redirect("/user/login");
        })
        .catch(function () {
          res.redirect("/");
        });
    },
    profile: function (req, res) {
      //const id=req.parms.id
      //user.findByPk(id)
      // .then(function(usuario){
      res.render("profile", { usuario: db.usuario });
      // })
      // .catch(function(err){
      // res.send(err);
      // })
    },
  };
  
  module.exports = userController;
  