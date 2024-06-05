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
        createdAt: {
            type: DataTypes.DATE,
        },
       //y esto tampoc se si va o on
        updatedAt: {
            type: DataTypes.DATE,

        },
        deletedAt: {
            type: DataTypes.DATE,
        }

        //no se si agregar aca el usario_id y el product_id
    };
    const config = {
        tableName: 'Productos',
        timestamps: true,
        underscored: true
    };
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};

