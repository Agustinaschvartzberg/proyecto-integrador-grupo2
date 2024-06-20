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
   
    return Producto
};

