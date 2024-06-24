const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const profileEditValidation = [
    body("email")
    .notEmpty() 
    .withMessage("completa el campo")
    .bail().isEmail()
    .withMessage("escribi en un formato valido"),

    body("name")
    .notEmpty()
    .withMessage("complera tu nombre de usuario"),
        
    body("password")
    .notEmpty()
    .withMessage("complera la contrasena")
    .bail().isLength({min:8})

]

module.exports = profileEditValidation;