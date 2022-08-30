'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entity_locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      is_HQ: {
        type: Sequelize.STRING
      },
      address_line_1: {
        type: Sequelize.STRING
      },
      address_line_2: {
        type: Sequelize.STRING
      },
      state_id: {
        type: Sequelize.INTEGER
      },
      city_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      legal_status: {
        type: Sequelize.STRING
      },
      tin: {
        type: Sequelize.STRING
      },
      gst: {
        type: Sequelize.STRING
      },
      primary_contact_id: {
        type: Sequelize.INTEGER
      },
      contact_designation: {
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
    await queryInterface.dropTable('entity_locations');
  }
};