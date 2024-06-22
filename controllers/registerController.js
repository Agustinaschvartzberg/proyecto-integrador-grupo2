const db = require('../database/models')
const bcrypt= require('bcryptjs');
const user= db.Usario;

const registerController={
    register: function (req, res) {
    console.log('en register')
    if (req.session.user!= undefined) {
      return res.redirect("/profile");
    }
    else {
    return res.render("register")};
},
  
store: function(req, res) {
    const errors = {}
    if (req.body.email == ""){
        errors.message = "ESTE CAMPO SE ENCUENTRA VACÍO, POR FAVOR INGRESE UN MAIL VÁLIDO";
        res.locals.errors = errors;
        return res.render('register')
    } else { 
        db.Usuario.findOne({ where: { email: req.body.email } })
    .then(function(user) {
      if (user) {
        errors.message = "El correo electrónico ya está registrado";
        res.locals.errors = errors;
        return res.render('register');
        
    } else if (req.body.contrasena== ""){
        errors.message = "La clave está vacía"
        res.locals.errors = errors;
        return res.render('register');
    
      } 
    else if (req.body.contrasena.lenght < 3){
            errors.message = "La clave debe ser mas larga"
            res.locals.errors = errors;
            return res.render('register');
    } else { 
        const escryptedPassword = bcrypt.hashSync(data.password, 10);  
        const form = req.body
        const newUser = {
            email:form.email,
            nombre: form.name,
            dni: form.dni,
            fecha: form.birthDate,
            foto: form.foto,
            password: data.escryptedPassword,
        }
        db.usuario
      .create(newUser)
      .then(function () {
        res.redirect("/user/login");
      })
      .catch(function () {
        res.redirect("/");
      });
    }
})
    }}
};
module.exports = registerController;