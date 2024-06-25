const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const profileEditValidation = [
    body("name")
    .notEmpty()
    .withMessage("debes completar tu nombre de usuario"),
    
    body("email")
    .notEmpty() 
    .withMessage("debes completar tu email")
    .bail().isEmail()
    .withMessage("escriba en una formato valido"),    
   
    body("password")
    .notEmpty()
    .withMessage("completa la contrasena")
    .bail().isLength({min:8}).
    withMessage("tiene que tener un minimo de 8 caracteres")

]

module.exports = profileEditValidation;