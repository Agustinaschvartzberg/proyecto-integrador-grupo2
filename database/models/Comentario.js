module.exports = function (sequelize, DataTypes) {
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

        usuarios_id: {
            type: DataTypes.INTEGER,
        }
    };
    const config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true,
        async: true
    };
    const comentario = sequelize.define(alias, cols, config);

    comentario.associate = function (models) {
        comentario.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'productos_id'
        }),
            comentario.belongsTo(models.Usuario, {
                as: 'usuarios',
                foreignKey: 'usuarios_id'
            });
    };
    return comentario;
}

    

