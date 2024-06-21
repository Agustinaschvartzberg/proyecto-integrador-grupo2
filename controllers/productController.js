const { or } = require("sequelize");
const db = require("../database/models");
const product = db.Producto;
const op = db.Sequelize.Op;

const productController = {
    product: function(req, res) {

        res.render('product', {producto: db.producto})
    },
    create: function(req, res) {
      console.log('en producto create');
        res.render('product-add');
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
};

module.exports = productController;