'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('VendorEmpanelments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agreement_type: {
        type: Sequelize.STRING,
        defaultValue: 'manpower',
      },
      client_entity_id: {
        type: Sequelize.INTEGER
      },
      vendor_entity_id: {
        type: Sequelize.INTEGER
      },
      vendor_code: {
        type: Sequelize.STRING
      },
      payment_terms: {
        type: Sequelize.STRING
      },
      empanelment_status: {
        type: Sequelize.ENUM('PENDING', 'APPROVED', 'REJECTED')
      },
      bill_to_address_id: {
        type: Sequelize.INTEGER
      },
      vendor_bank_id: {
        type: Sequelize.INTEGER
      },
      vendor_contact_user_id: {
        type: Sequelize.INTEGER
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('VendorEmpanelments');
  }
};
