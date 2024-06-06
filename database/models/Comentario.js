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
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,

        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        
        productos_id: {
            type: dataTypes.INTEGER,
        },
        
        usuarios_id:{
            type: dataTypes.INTEGER,
        }
    };
    const config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
    };
    const Comentario = sequelize.define(alias, cols, config);
    return Comentario;
};
