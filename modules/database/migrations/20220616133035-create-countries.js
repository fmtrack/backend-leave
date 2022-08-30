'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      iso_alpha2: {
        type: Sequelize.STRING
      },
      iso_alpha3: {
        type: Sequelize.STRING
      },
      dialing_code: {
        type: Sequelize.STRING
      },
      capital_city: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      flag: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('countries');
  }
};
