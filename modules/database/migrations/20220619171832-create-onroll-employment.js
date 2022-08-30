'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('onroll_employments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      onroll_employee_id: {
        type: Sequelize.INTEGER
      },
      onroll_entity_id: {
        type: Sequelize.INTEGER
      },
      designation: {
        type: Sequelize.STRING
      },
      assigned_location_id: {
        type: Sequelize.INTEGER
      },
      joining_date: {
        type: Sequelize.DATE
      },
      this_role_start_date: {
        type: Sequelize.DATE
      },
      company_joining_date: {
        type: Sequelize.DATE
      },
      last_working_date: {
        type: Sequelize.DATE
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      assigned_offroll: {
        type: Sequelize.STRING
      },
      has_resigned: {
        type: Sequelize.BOOLEAN
      },
      resignation_date: {
        type: Sequelize.DATE
      },
      employee_salary_id: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('onroll_employments');
  }
};
