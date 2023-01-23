'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('sales_products', { 
      sale_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {        
        allowNull: false,
        type: Sequelize.INTEGER},
    });

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('sales_products');
  }
};
