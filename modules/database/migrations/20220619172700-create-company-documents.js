'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company_documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      document_type_id: {
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      weight_sequence_vendor: {
        type: Sequelize.STRING
      },
      weight_sequence_employee: {
        type: Sequelize.STRING
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
      is_mandatory: {
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
    await queryInterface.dropTable('company_documents');
  }
};