'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('document_verifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      document_id: {
        type: Sequelize.INTEGER
      },
      verification_status: {
        type: Sequelize.STRING
      },
      verification_certificate_path: {
        type: Sequelize.STRING
      },
      verified_by: {
        type: Sequelize.STRING
      },
      verified_on: {
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
    await queryInterface.dropTable('document_verifications');
  }
};