module.exports = (sequelize, DataTypes) => { 
    const Product = sequelize.define('Product', { 
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true, }, 
        name: { 
            type: DataTypes.STRING(100), 
            allowNul: false, 
        }, 
        price: { 
            type: DataTypes.DECIMAL(4,2), 
            allowNul: false, 
            UNIQUE: true, 
        }, 
        url_image: { 
            type: DataTypes.STRING(32), 
            allowNul: false, 
        },
    }, 
    { 
        underscored: true, 
        tableName: 'products', 
        timestamps: false, 
    }
    ); 

    return Product;
};