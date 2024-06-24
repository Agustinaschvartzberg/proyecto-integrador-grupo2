const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const loginValidation = [
    body("email")
    .notEmpty()
        .withMessage("completa algo").bail()
        .isEmail()
        .withMessage("e-mail no valido")
        .custom(function(value, {req}){
            return db.Usuario.findOne({
                where: {email:value}
            })
            .then(function(usuarioentrando){
                if(!usuarioentrando){
                    throw new Error("contra incorrecta")
                }
            })
        }
    ),
    body("password").notEmpty().withMessage("completa algo")
        .bail()
        .custom(function(value, {req}){
            return db.Usuario.findOne({ where: {email:req.body.email}  })
            .then(function(Usuario){
                if(user){
                    const contra = Usuario.password;
                    const contraencriptada= bcryptjs.compareSync(value,contra);
                    if(!contraencriptada){
                        throw new Error("contra incorrecta")
                    }                    
                }
            })
        })
]

module.exports = loginValidation;