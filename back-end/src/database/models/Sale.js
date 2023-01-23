module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNul: false,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNul: false,
      },
      total_price: {
        type: DataTypes.DECIMAL(9,2),
        allowNul: false,
      },
      delivery_address: {
        type: DataTypes.STRING(100),
        allowNul: false,
      },
       delivery_number: {
        type: DataTypes.STRING(50),
        allowNul: false,
      },
       sale_date: {
        type: DataTypes.DATETIME,
        allowNul: false,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNul: false
      }
    },
    {
      underscored: true, 
      tableName: 'sales',
      timestamps: false,
    }
    );

    return Sale;
  };