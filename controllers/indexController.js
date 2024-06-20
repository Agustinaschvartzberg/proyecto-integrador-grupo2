const db= require('../database/models');

const indexController = {
    index: function (req, res) {
        db.Producto.findAll({
          include: [ 
          { association: 'usuario'}, {association: 'comentarios'}
        ],
        },
        {order: [
          ['created_at', 'DESC']]})
          .then(function(result) {
            return res.render('index', {
              lista: data.lista, comment: data.comment, usuario: data.usuario
            }
          )})
          .catch(function (error) {
            console.log(error)
          })
          },
        }

module.exports = indexController; 
   
