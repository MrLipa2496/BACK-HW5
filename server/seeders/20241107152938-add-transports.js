'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Transportation',
      [
        {
          TRP_Type: 'Airplane',
          TRP_CarrierName: 'Delta Airlines',
          TRP_Cost: 550.0,
          TRP_Phone: '18001234567',
          TRP_Email: 'contact@delta.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Airplane',
          TRP_CarrierName: 'American Airlines',
          TRP_Cost: 620.0,
          TRP_Phone: '18002345678',
          TRP_Email: 'info@aa.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Airplane',
          TRP_CarrierName: 'United Airlines',
          TRP_Cost: 500.0,
          TRP_Phone: '18003456789',
          TRP_Email: 'support@united.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Airplane',
          TRP_CarrierName: 'Lufthansa',
          TRP_Cost: 570.0,
          TRP_Phone: '18009876543',
          TRP_Email: 'contact@lufthansa.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Train',
          TRP_CarrierName: 'Amtrak',
          TRP_Cost: 120.0,
          TRP_Phone: '8008727245',
          TRP_Email: 'contact@amtrak.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Train',
          TRP_CarrierName: 'Eurostar',
          TRP_Cost: 150.0,
          TRP_Phone: '03432221222',
          TRP_Email: 'info@eurostar.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Train',
          TRP_CarrierName: 'Deutsche Bahn',
          TRP_Cost: 100.0,
          TRP_Phone: '0493042203020',
          TRP_Email: 'service@bahn.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Train',
          TRP_CarrierName: 'SBB',
          TRP_Cost: 130.0,
          TRP_Phone: '0848-000-111',
          TRP_Email: 'info@sbb.ch',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Bus',
          TRP_CarrierName: 'Greyhound',
          TRP_Cost: 45.0,
          TRP_Phone: '18002345678',
          TRP_Email: 'info@greyhound.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Bus',
          TRP_CarrierName: 'FlixBus',
          TRP_Cost: 40.0,
          TRP_Phone: '08006787878',
          TRP_Email: 'service@flixbus.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Bus',
          TRP_CarrierName: 'Megabus',
          TRP_Cost: 25.0,
          TRP_Phone: '18666778899',
          TRP_Email: 'contact@megabus.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Bus',
          TRP_CarrierName: 'National Express',
          TRP_Cost: 55.0,
          TRP_Phone: '03717031234',
          TRP_Email: 'info@nationalexpress.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Car',
          TRP_CarrierName: 'Hertz Rent-A-Car',
          TRP_Cost: 70.0,
          TRP_Phone: '18001452756',
          TRP_Email: 'reservations@hertz.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Car',
          TRP_CarrierName: 'Enterprise Rent-A-Car',
          TRP_Cost: 65.0,
          TRP_Phone: '800-261-7331',
          TRP_Email: 'contact@enterprise.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Car',
          TRP_CarrierName: 'Avis Rent-A-Car',
          TRP_Cost: 60.0,
          TRP_Phone: '800-230-4898',
          TRP_Email: 'support@avis.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TRP_Type: 'Car',
          TRP_CarrierName: 'Sixt Rent-A-Car',
          TRP_Cost: 85.0,
          TRP_Phone: '18003305151',
          TRP_Email: 'reservations@sixt.com',
          TRP_Img: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transportation', null, {});
  },
};
