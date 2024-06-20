module.exports = function(sequelize, DataTypes) {
    const alias = 'Comentario';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        texto: {
            type: DataTypes.STRING(100),
        },
        productos_id: {
            type: DataTypes.INTEGER,
        },
        
        usuarios_id:{
            type: DataTypes.INTEGER,
        }
    };
    const config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true,
        async: true
    };
    const Comentario = sequelize.define(alias, cols, config);
    Comentario.belongsTo(models.Product, {
        as: 'productos',
        foreignKey: 'id_post'
    }),
    Comentario.belongsTo(models.User, {
        as: 'usuarios',
        foreignKey: 'id_usuario' 
    })
}
    return Comentario;

