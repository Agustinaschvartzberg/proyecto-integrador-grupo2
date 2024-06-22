const { or } = require("sequelize");
const db = require("../database/models");
const op = db.Sequelize.Op;

const productController = {
  show: function (req, res) {

    let idUsuario = ''
    if (req.session.usuario != undefined){
         idUsuario = req.session.usuario.id
    }
    
    let id = req.params.id;
    db.Productos.findOne({
         where: [{ id: id }],
         include: [
              { association: 'comentarios', include: [{ association: 'usuarios' }] },
              { association: 'usuarios' }
         ]
    })

         .then(function (productos) {
              return res.render('productos', {

                   idUsuario : idUsuario,
                   datosdelproducto: productos
              })
         })
},

add: function (req, res) {
    if (req.session.usuario && req.session.usuario.id) {

    }
    return res.render('product-add')
},

submit: function (req, res) {
    let productos = {

         id_usuario: String(req.session.usuario.id),
         nombredelproducto: req.body.producto,
         descripcion: req.body.descripcion,
         imagen : req.body.photo
       
    }

    db.Productos.create(productos)
         .then(function (productoCreado) {
              return res.redirect('/');
         })

         .catch(function (error) {
              console.log(error);
              return res.render('product-add');
         })
},

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
      })
      .then(function (products) {
        res.render("search-results", { products: products });
      }) .catch(err => console.log(err)) ;
  },
  delete: function (req, res){
    let id = req.params.id;
  
    db.Commentarios.destroy({
         where: { id_post: id }
       })
       .then(() => {
         return db.Productos.destroy({
           where: { id: id }
         });
       })
       .then(() => {
         return res.redirect('/');
       })
    .catch(function (error) {
         console.log(error);
         return res.redirect('/');
    })
  },
  
}


module.exports = productController;