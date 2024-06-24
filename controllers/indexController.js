const db= require('../database/models');

const indexController = {
    index: function (req, res) {
        db.Producto.findAll({
          include: [ 
          { association: 'usuario'}
        ],
        },
        {order: [['created_at', 'DESC']] })
          .then(function(result) {
            // console.log(result)
            // quiero devolver una lista de productos ordenados de forma descendente
            // usuario es el usuario relacionado a cada producto
            // comment es el comentario relacionado a cada producto
            const usuarios = [];
            const productos = [];
            for(let i = 0; i < result.length; i++) {
              productos.push(result[i].dataValues);
              usuarios.push(result[i].dataValues.usuario);
            }
            return res.render('index', {
              lista: productos, comment: result.comment
            }
          )})
          .catch(function (error) {
            console.log(error)
          })
          },
        }

module.exports = indexController; 
   
