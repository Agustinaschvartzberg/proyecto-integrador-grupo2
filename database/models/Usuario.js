module.exports = function(sequelize, DataTypes) {
    const alias = 'Usuario';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING

        },   
        email: {
            type: dataTypes.STRING(100),
        },
        password: {
            type: decodeURIComponentataTypes.STRING(100),
        },
        date: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        photo: {
            type: dataTypes.STRING(500),
        }
    };}
    const config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true,
        async: true
    };
    const usuario = sequelize.define(alias, cols, config);
    usuario.associate = function(models){
        usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuarios_id"
        })
    return usuario;
}

