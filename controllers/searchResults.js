let db = require('../database/models')
let op = db.Sequelize.Op;
let searchResultsController = {
    search: function (req, res) {
        console.log('en producto search');
          res.render("search-results");
      },
      search_results: function (req, res) {
        console.log('en producto search results');
          if (req.query.search == undefined) {
              res.redirect("/");
      }
      let search = req.query.search;
      product
        .findAll({
          where: {
            nombre: {
              [op.like]: "%" + search + "%",
            },
            or: {
              descripcion: {
                [op.like]: "%" + search + "%",
              },
            },
          },
          order: [["created_at", "DESC"]],
          include: [{ association: 'comentarios' }, { association: 'usuarios' }]

        })

        .then(function (productos) {
          return res.render("search-results", { lista: productos })  
        })
           .catch(err => console.log(err)) 
           },
    
  showReultsforUsuarios: function (req, res) {
    let usuariobuscado = req.query.search
    let usbuscado = {
      where: {
        [op.or]: [
          { usuario: { [op.like]: `%${usuariobuscado}%` } },
        ]
        
      },
      order: [['createdAt', 'DESC']],
    }


db.Usuario.findAll(usbuscado)
  .then(function (resultados) {

    if (result.length > 0) {
      return res.render('user-results', { lista: resultados })
    } else {
      let errors = {};
      errors.message = "El usuario buscado no se encuentra registrado"
      res.locals.errors = errors;
      return res.render('user-results', { lista: undefined })
    }
  })


  .catch(function (error) {
    console.log(error)
  })
}}


module.exports = searchResultsController