'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tours', {
      TR_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TR_Name: {
        type: Sequelize.STRING,
      },
      TR_Description: {
        type: Sequelize.TEXT,
      },
      TR_Price: {
        type: Sequelize.DECIMAL,
      },
      TR_StartDate: {
        type: Sequelize.DATE,
      },
      TR_EndDate: {
        type: Sequelize.DATE,
      },
      TR_TourType: {
        type: Sequelize.STRING,
      },
      TR_Destination: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tours');
  },
};
