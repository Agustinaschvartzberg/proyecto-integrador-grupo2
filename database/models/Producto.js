module.exports = function(sequelize, DataTypes) {
    const alias = 'Producto';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        photo: {
            type: dataTypes.STRING(500),
        },
        producto: {
            type: dataTypes.STRING(50),

        },
        descripcion: {
            type: dataTypes.STRING(100),
        },
        usuarios_id:{
            type: dataTypes.INTEGER,
        }


    };
    const config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true,
        async: true
    };
    const producto = sequelize.define(alias, cols, config);
    producto.associate = function(models){
        producto.belongsTo(models.Usario, {
            as: 'usuarios',
            foreignKey: 'usuarios_id'
        })
        //la foreignKey: conectar a las dos columnas (en este caso al usuario con su id, relaciona ambas tablas)
        //as define un alias para usar en el controlador 
        //producto.hasMany(models.Comentario, {
            //as: 'comentarios',
            //foreignKey: 'id_post' 
        //})
    //} 
    }
    return producto
};

