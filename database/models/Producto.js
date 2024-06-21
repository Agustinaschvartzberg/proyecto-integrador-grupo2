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
    const producto = sequelize.define(alias, cols, config);
    producto.associate = function(models){
        producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        //la foreignKey: conectar a las dos columnas (en este caso al usuario con su id, relaciona ambas tablas)
        //as define un alias para usar en el controlador 
        // producto.hasMany(models.Comentario, {
        //     as: 'comentarios',
        //     foreignKey: 'id_post' 
        // })
    //} 
    }
    return producto
};
