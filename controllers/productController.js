const { or } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;

const productController = {
  show: function (req, res) {

    let idUsuario = ''
    if (req.session.usuario != undefined){
         idUsuario = req.session.usuario.id
     
        }    else {
          let id = req.params.id;
          db.Producto.findByPk(id),{ 
            where: [{ id: id }],
         include: [
              { association: 'comentarios', include: [{ association: 'usuarios' }] },
              { association: 'usuarios' }
         ]
          }        
         .then(function (productos) {
              return res.render('productos', {

                   idUsuario : idUsuario,
                   datosdelproducto: productos
              })
         })
        }
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
    let search = req.query.search;

     console.log('en producto search results');
        if (req.query.search == undefined) {
            return res.redirect("/");
    }
    db.Producto.findAll({
      where: {
        [op.or]: [
          { producto: { [op.like]: "%" + search + "%" } },
          { descripcion: { [op.like]: "%" + search + "%" } }
        ]
      },
      order: [['created_at', 'DESC']],
      include: [{ model: db.Usuario, as: 'usuario', attributes: ['nombre'] }]
    })
    .then(function (products) {
      if (products.length === 0) {
        return res.render('search-results', { products: null, mensaje: 'No hay resultados para su criterio de búsqueda' });
      }
      return res.render('search-results', { products: products, mensaje: null });
    })
    .catch(function (error) {
      console.error(error);
      return res.render('search-results', { products: null, mensaje: 'Error al realizar la búsqueda' });
    });
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
  comment: function (req, res) {


    const comentario = {
         comentarios_id: req.params.id,
         usuarios_id: String(req.session.user.id),
         comentarios: req.body.comentario
    }

    db.Comentario.create(comentario)
    return res.redirect("/products/detalle/id/" + req.params.id)
  },
  modify: function (req, res) {
    return res.render('product-edit', { random: req.params.id })
    .catch(function (error) {
      console.log(error);
      return res.render('product-edit');
    })
  },
  modificado: function (req, res){
    let form = req.body
    let updates = {}; 
    if (form.photos) {
      updates.photos = form.photos;
    }
    if (form.producto) {
      updates.producto = form.producto;
    }
    if (form.descripcion) {
      updates.descripcion = form.descripcion;
    };
    db.Producto.update(updates,
      {where: {
        id: req.params.id
      },fields: Object.keys(updates)
    })
    .then(() => {
      return res.redirect('/');
    })
  }, 
}


module.exports = productController;