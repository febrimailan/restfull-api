'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('DataUsers', [
      {
        first_name: 'John',
        last_name: 'Doe',
        address: 'East Jakarta',
        createdAt: new Date (),
        updatedAt: new Date()
      },
      {
        first_name: 'Jen',
        last_name: 'Blah',
        address: 'Bogor',
        createdAt: new Date (),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
