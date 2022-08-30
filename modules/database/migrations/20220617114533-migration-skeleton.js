'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.renameTable('vendor_basic', 'entity_basic');
    // await queryInterface.renameTable('vendor_document', 'entity_document');
    // await queryInterface.renameTable('vendor_finance', 'entity_finance');
    // await queryInterface.renameTable('vendor_address', 'entity_address');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.renameTable('entity_basic', 'vendor_basic');
    // await queryInterface.renameTable('entity_document', 'vendor_document');
    // await queryInterface.renameTable('entity_finance', 'vendor_finance');
    // await queryInterface.renameTable('entity_address', 'vendor_address');
  },
};
