const db = require("../database/models");
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;

const profileController = {
    det: function (req, res) {
        let idUsuario = '';
        if (req.cookies.user != undefined) {
            idUsuario = req.cookies.user.id;
        }
        const username = req.params.username;
        console.log(username)
        db.Usuario.findOne({
            where: [{ nombre: username }],
            include: [{ association: 'productos' }]

        }).then(function (unUsuario) {
            console.log('estamos en then', unUsuario);
            res.render('profile', {
                datosUsuario: unUsuario,
                idUsuario: idUsuario
            });
        }).catch(function (e) {
            console.log(e);
        });;
    },

};

module.exports = profileController;