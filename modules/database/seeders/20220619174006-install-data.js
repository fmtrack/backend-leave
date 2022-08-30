'use strict';
const { createPassword } = require('../../users/repository/User');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@example.com',
        password: createPassword('password'),
        firstName: 'Admin',
        lastName: '',
        token: '',
        userType: 'super_admin',
      }
    ]);
    await queryInterface.bulkInsert('user_role_types', [
      {
        name: 'Manage Vendors',
        role_name: 'manage_vendors',
      },
      {
        name: 'Manage Clients',
        role_name: 'manage_clients',
      },
      {
        name: 'Company Admin',
        role_name: 'company_admin',
      },
      {
        name: 'Super Admin',
        role_name: 'super_admin',
      },
      {
        name: 'Branch Admin',
        role_name: 'branch_admin',
      },
      {
        name: 'Employee',
        role_name: 'employee',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_role_types', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
