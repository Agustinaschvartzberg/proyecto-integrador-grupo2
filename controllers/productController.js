const { or } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;

const productController = {
  show: function (req, res) {

    //let idUsuario = ''
    // if (req.session.usuario != undefined){
    //    idUsuario = req.session.usuario.id
    // }

    let id = req.params.id;
    db.Producto.findByPk(id, {
      where: [{ id: id }],
      include: [
        { association: 'usuario' },
      ]
    })

      .then(function (producto) {
        res.render('product', {
          //idUsuario : idUsuario,
          datosproducto: producto
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },


  add: function (req, res) {
    if (req.session.usuario && req.session.usuario.id) {

    }
    return res.render('product-add');
  },

  submit: function (req, res) {
    let productos = {

      id_usuario: String(req.session.usuario.id),
      nombredelproducto: req.body.producto,
      descripcion: req.body.descripcion,
      imagen: req.body.photo

    };

    db.Productos.create(productos)
      .then(function (productoCreado) {
        return res.redirect('/');
      })

      .catch(function (error) {
        console.log(error);
        return res.render('product-add');
      });
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
      }).catch(err => console.log(err));
  },
  delete: function (req, res) {
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
      });
  },
  comment: function (req, res) {


    const comentario = {
      comentarios_id: req.params.id,
      usuarios_id: String(req.session.user.id),
      comentarios: req.body.comentario
    };

    db.Comentario.create(comentario);
    return res.redirect("/products/detalle/id/" + req.params.id);
  },
  modify: function (req, res) {
    return res.render('product-edit', { random: req.params.id })
      .catch(function (error) {
        console.log(error);
        return res.render('product-edit');
      });
  },
  modificado: function (req, res) {
    let form = req.body;
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
      {
        where: {
          id: req.params.id
        }, fields: Object.keys(updates)
      })
      .then(() => {
        return res.redirect('/');
      });
  },
};

module.exports = productController;