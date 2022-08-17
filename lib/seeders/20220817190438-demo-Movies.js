'use strict';

const db = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Movie.bulkCreate([
      {
        title: 'Actiony film',
        description: 'sucks',
        image: '101010101',
        releaseYear: 1987,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Comedy film',
        description: 'sucks',
        image: '101010101',
        releaseYear: 1985,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
