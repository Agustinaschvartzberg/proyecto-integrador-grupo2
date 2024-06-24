const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const profileEditValidation = [
    body("email")
    .notEmpty() 
    .withMessage("completa algo")
    .bail().isEmail()
    .withMessage("escribi en un faormatlo valido"),

    body("nombre")
    .notEmpty()
    .withMessage("complera tu nombre de usuario"),
        
    body("password")
    .notEmpty()
    .withMessage("complera la contrasena")
    .bail().isLength({min:8})

]

module.exports = profileEditValidation;