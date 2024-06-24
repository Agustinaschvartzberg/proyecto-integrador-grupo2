const db = require('../database/models');
const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');


const registerController = {
  register: function (req, res) {
    console.log('en register');
    if (req.session.user != undefined) {
      return res.redirect("/profile");
    }
    else {
      return res.render("register");
    };
  },

  store: function (req, res) {
    console.log('Buscando usuario con email:', req.body.email);
    db.Usuario.findOne({ where: { email: req.body.email } })
      .then(function (user) {
        if (user) {
          console.log('Usuario encontrado:', user);
          errors.message = "El correo electrónico ya está registrado";
          res.locals.errors = errors;
          return res.render('register');
        } else if (req.body.contrasena == "") {
          console.log('Campo contraseña vacío');
          errors.message = "La clave está vacía";
          res.locals.errors = errors;
          return res.render('register');
        } else if (req.body.contrasena.length < 3) {
          console.log('La clave es demasiado corta');
          errors.message = "La clave debe ser mas larga";
          res.locals.errors = errors;
          return res.render('register');
        } else {
          console.log('Hashing contraseña');
          const encryptedPassword = bcrypt.hashSync(req.body.contrasena, 10);
          const form = req.body;
          const newUser = {
            email: form.email,
            nombre: form.name,
            dni: form.dni,
            fecha: form.birthDate,
            foto: form.foto,
            password: encryptedPassword,
          };
          console.log('Creando nuevo usuario:', newUser);
          db.usuario
            .create(newUser)
            .then(function () {
              console.log('Usuario creado con éxito');
              res.redirect("/user/login");
            })
            .catch(function (error) {
              console.log('Error al crear el usuario:', error);
              res.redirect("/");
            });
        }
      })
      .catch(function (error) {
        console.log('No encontro al usuario. hay que crearlo');
        if (req.body.password == "") {
          console.log('Campo contraseña vacío');
          errors.message = "La clave está vacía";
          res.locals.errors = errors;
          return res.render('register');
        } else if (req.body.password.length < 3) {
          console.log('La clave es demasiado corta');
          errors.message = "La clave debe ser mas larga";
          res.locals.errors = errors;
          return res.render('register');
        } else {
          console.log('Hashing contraseña');
          const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
          const form = req.body;
          const newUser = {
            email: form.email,
            nombre: form.name,
            dni: form.dni,
            fecha: form.birthDate,
            foto: form.foto,
            password: encryptedPassword,
          };
          console.log('Creando nuevo usuario:', newUser);
          db.Usuario
            .create(newUser)
            .then(function () {
              console.log('Usuario creado con éxito');
              res.redirect("/user/login");
            })
            .catch(function (error) {
              console.log('Error al crear el usuario:', error);
              res.redirect("/");
            });
        }
        res.redirect("/");
      });
  }
};
module.exports = registerController;