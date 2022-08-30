'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'State',
      [
        {
          name: 'Delhi',
          country_id: 1,
        },
        {
          name: 'Gujrat',
          country_id: 1,
        },
        {
          name: 'Maharastra',
          country_id: 1,
        },
        {
          name: 'Haryana',
          country_id: 1,
        },
        {
          name: 'Punjab',
          country_id: 1,
        },
        {
          name: 'Uttar Pradesh',
          country_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('State', null, {});
  },
};
