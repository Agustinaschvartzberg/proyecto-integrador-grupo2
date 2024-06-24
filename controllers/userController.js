const db=require("../database/models")
const bcrypt= require('bcryptjs');
let op = db.Sequelize.Op;


const userController = {
  index: function(req, res){
    return res.render('login');
},
login: function(req, res){
    db.Usuario.findOne({
        where: [{email: req.body.email}]
    })
    .then( user => {
        req.session.user = user;
        console.log('en login controller');
        console.log(req.session.user);

        //Si tildó recordame => creamos la cookie.
        if(req.body.rememberme != undefined){
            res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
        }

        return res.redirect('/');
        
    })
    .catch( e => {console.log(e)})

},
logout: function(req,res){
    //Destruir la sessión
    req.session.destroy();

    //Destruir la coockie
     res.clearCookie('userId');
    
    //redireccionar a hone
    return res.redirect('/')
}

}



 //   edit: function (req, res) {
    //  console.log('en edit')
  //    res.render("profile-edit");
  //  },
  //  profile: function (req, res) {
  //    const id=req.parms.id
   //   user.findByPk(id)
   //   .then(function(usuario){
     // res.render("profile", { usuario: usuario });
   //    })
     // .catch(function(err){
    //  res.send(err);
    //   })
  //  },
   // loginPost: function (req, res) {
    //    user
     //     .findOne({
      //      where: {
      //        email: req.body.email,
       //     },
       //   })
      //    .then(function (usuario) {
       //     if (usuario) {
       //       if (bcrypt.compareSync(req.body.password, usuario.password)) {
         //       res.session.usuario = usuario;
           //     if (req.body.remember) {
           //       res.cookie("user", usuario.id, { maxAge: 60000 });
            //    }
    
             //   res.redirect("/profile");
           //   } else {
            //    res.send("Contraseña incorrecta");
           //   }
          //  } else {
          //    res.send("Usuario no encontrado");
         //  }
        //  })
       //  .catch(function (err) {
       //    res.send(err);
       //   });
   ///  },
   //  logout: function (req, res) {
   //     res.session.destroy();
 //   res.clearCookie("user");
   //     res.redirect("/");
  //   },
  //};

  
  module.exports = userController;
  