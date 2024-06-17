module.exports = function(sequelize, DataTypes) {
    const alias = 'Producto';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        foto: {
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
        tableName: 'Productos',
        timestamps: true,
        underscored: true,
        async: true
    };
    const Producto = sequelize.define(alias, cols, config);
  
    Producto.associate = function(model) {
        Producto.belongsTo(model.Usuario, {
        as: "usuario",
        foreignKey: "usuario_id",
      })
        Producto.hasMany(model.Comentario, {
        as: "comentarios",
        foreignKey: "productos_id",
      })
    }
   
    return Producto
};

