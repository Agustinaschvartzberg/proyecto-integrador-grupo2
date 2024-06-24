module.exports = function (sequelize, DataTypes) {
    const alias = 'Usuario';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING(100)
        },
        date: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.INTEGER
        },
        photo: {
            type: DataTypes.STRING(500)
        }
    };
    const config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true,
        async: true
    };
    const usuario = sequelize.define(alias, cols, config);
    
    usuario.associate = function (models) {
        usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        });
    };
    
    return usuario;
};

