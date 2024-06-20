module.exports = function(sequelize, DataTypes) {
    const alias = 'Producto';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        photo: {
            type: DataTypes.STRING(500),
        },
        producto: {
            type: DataTypes.STRING(50),

        },
        descripcion: {
            type: DataTypes.STRING(100),
        },
        usuario_id:{
            type: DataTypes.INTEGER,
        }


    };
    const config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true,
        async: true
    };
    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        }),
        //la foreignKey: conectar a las dos columnas (en este caso al usuario con su id, relaciona ambas tablas)
        //as define un alias para usar en el controlador 
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_post' 
        })
    } 
   
    return Producto
};

