'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offroll_employment_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      offroll_employee_id: {
        type: Sequelize.INTEGER
      },
      designation: {
        type: Sequelize.STRING
      },
      assigned_location_id: {
        type: Sequelize.INTEGER
      },
      onroll_entity_id: {
        type: Sequelize.INTEGER
      },
      offroll_entity_id: {
        type: Sequelize.INTEGER
      },
      this_role_start_date: {
        type: Sequelize.DATE
      },
      this_role_end_date: {
        type: Sequelize.DATE
      },
      offrole_joining_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('offroll_employment_histories');
  }
};