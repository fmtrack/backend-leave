'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('document_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      document_name: {
        type: Sequelize.STRING
      },
      document_has_expiry: {
        type: Sequelize.STRING
      },
      document_has_back: {
        type: Sequelize.STRING
      },
      valid_country_id: {
        type: Sequelize.INTEGER
      },
      is_vendor: {
        type: Sequelize.STRING
      },
      is_company: {
        type: Sequelize.STRING
      },
      is_employee: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('document_types');
  }
};