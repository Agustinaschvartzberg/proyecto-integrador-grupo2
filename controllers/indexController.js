const db= require('../database/models');

const indexController = {
    index: function (req, res) {
        db.Producto.findAll({include: [ { association: 'usuario' }]})

          .then(function (result) {
                          
              return res.render('index', { productos:productos})
            } 
          )
          .catch(function (error) {
            console.log(error)
          })
          },
    }

module.exports = indexController; 
   
// search: function(req, res){
 //       res.render('search-results')
 //   }