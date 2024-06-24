const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const registerValidations = [
    body("nombre")
    .notEmpty()
    .withMessage("completar tu nombre"),
    body("email")
        .notEmpty()
        .withMessage("completa tu mail")
        .bail()
        .isEmail()
        .withMessage("formato de correo valido")
        .custom(function(value, {req}){
            return db.Usuario.findOne({
                where: {email:value}
            })
            .then(function(usuarioentrnado){
                if(usuarioentrando){
                    throw new Error("ya hay un usuario con ese mail")
                }
            })
        }
    ),
    body("password")
        .notEmpty()
        .withMessage("completa la contrasena")
        .custom(function(value, {req}){
            return db.Usuario.findOne({
                where: {email:req.body.email}
            })
            .then(function(usuario){
                if(usuario){
                    const password = usuario.password;
                    const contraEncriptada= bcryptjs.compareSync(value,password);
                    if(!contraencriptada){
                        throw new Error("contra incorrecta")
                    }                    
                }
            })
        })
        

]

module.exports = registerValidations;