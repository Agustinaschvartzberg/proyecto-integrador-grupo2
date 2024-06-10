module.exports = function(sequelize, DataTypes) {
    const alias = 'Usuario';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING(100),
        },
        password: {
            type: DataTypes.STRING(100),
        },
        fecha: {
            type: DataTypes.DATE,
        },
        dni: {
            type: DataTypes.INTEGER,
        },
        foto: {
            type: DataTypes.STRING(500),
        }
    };
    const config = {
        tableName: 'Usuarios',
        timestamps: true,
        underscored: true,
        async: true
    };
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
};

