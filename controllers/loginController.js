const db = require("../database/models");
const bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;

const loginController = {
    index: function(req, res) {
        return res.render('login');
    },
    login: function(req, res) {
        db.Usuario.findOne({
            where: { email: req.body.email }
        })
        .then(user => {
            req.session.user = user;
            console.log('en login controller');
            console.log(req.session.user);

            // Si tildó recordame => creamos la cookie.
            if (req.body.rememberme !== undefined) {
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5 });
            }

            return res.redirect('/');
        })
        .catch(e => { console.log(e); });
    },
    logout: function(req, res) {
        // Destruir la sesión
        req.session.destroy();

        // Destruir la cookie
        res.clearCookie('userId');

        // Redireccionar a home
        return res.redirect('/');
    }
};

module.exports = loginController;