module.exports = (sequelize, DataTypes) => { 
    const SaleProduct = sequelize.define('SaleProduct', { 
        sale_id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true, }, 
        product_id: { 
            type: DataTypes.STRING(100), 
            allowNul: false, 
        }, 
        quantity: { 
            type: DataTypes.STRING(100), 
            allowNul: false, 
            UNIQUE: true, 
        }, 
    }, 
    { 
        underscored: true, 
        tableName: 'users', 
        timestamps: false, 
    }
    ); 

    //orderId

    SaleProduct.associate = (models) => {
        SaleProduct.belongsTo(models.Sale, {
          foreignKey: 'sale_Id',
        })
      }

      SaleProduct.associate = (models) => {
        SaleProduct.belongsTo(models.Product, {
          foreignKey: 'product_Id',
        })
      }

    // SaleProduct.associate = (models) => {
    //     SaleProduct.belongsToMany(models.Product, {
    //         as: 'sale_id',
    //         through: SaleProduct,
    //         foreignKey: 'sale_id',
    //         otherKey: 'post_id',
    //     });

    //     models.BlogPost.belongsToMany(models.Category, {
    //         as: 'categories',
    //         through: PostCategoryTable,
    //         foreignKey: 'post_id',
    //         otherKey: 'category_id',
    //     });
    // };

    return SaleProduct ;
};