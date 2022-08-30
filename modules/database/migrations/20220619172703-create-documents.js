'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      vendor_document_type_id: {
        type: Sequelize.INTEGER
      },
      document_name: {
        type: Sequelize.STRING
      },
      document_expiry: {
        type: Sequelize.STRING
      },
      document_front_path: {
        type: Sequelize.STRING
      },
      document_back_path: {
        type: Sequelize.STRING
      },
      is_mandatory: {
        type: Sequelize.STRING
      },
      is_verified: {
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
    await queryInterface.dropTable('documents');
  }
};