'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('companies', [{
        name: 'Company',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Company', null, {});
  }
};
