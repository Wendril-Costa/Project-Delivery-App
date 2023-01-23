module.exports = (sequelize, DataTypes) => { 
    const User = sequelize.define('User', { 
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true, }, 
        name: { 
            type: DataTypes.STRING(100), 
            allowNul: false, 
        }, 
        email: { 
            type: DataTypes.STRING(100), 
            allowNul: false, 
            UNIQUE: true, 
        }, 
        password: { 
            type: DataTypes.STRING(32), 
            allowNul: false, 
        }, 
        role: { 
            type: DataTypes.STRING(10), 
            allowNul: false, 
        }, 
    }, 
    { 
        underscored: true, 
        tableName: 'users', 
        timestamps: false, 
    }

    ); 

    User.associate = (models) => {
        User.hasMany(models.Sale, {
            as: 'sales',
            foreignKey: 'user_id',
        })
    };

    return User;
};