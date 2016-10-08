'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('TransactionFees', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        fix: 7.90,
        currency: 'EUR',
        variable: 2.01,
        operationSide: +1,
        region: 'NYSE EURONEXT - EURONEXT PARIS'
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        fix: 35.00,
        currency: 'EUR',
        variable: 0,
        operationSide: +1,
        region: 'LONDON STOCK EXCHANGE'
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        fix: 35.00,
        currency: 'EUR',
        variable: 0,
        operationSide: +1,
        region: 'DEUTSCHE BOERSE XETRA'
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
