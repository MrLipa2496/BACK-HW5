'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tours', [
      {
        TR_Name: 'Cultural Journey to Japan, Osaka',
        TR_Description: 'Explore the rich history and culture of Japan.',
        TR_Price: 2500.0,
        TR_StartDate: '2025-08-20',
        TR_EndDate: '2025-08-27',
        TR_TourType: 'Excursion',
        TR_Destination: 'Japan',
        TR_Img: 'tourPhoto-1730283860942.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TR_Name: 'Island Hopping in Greece',
        TR_Description: 'Discover the beautiful islands of Greece.',
        TR_Price: 1800.0,
        TR_StartDate: '2025-06-10',
        TR_EndDate: '2025-06-17',
        TR_TourType: 'Adventure',
        TR_Destination: 'Greece',
        TR_Img: 'tourPhoto-1730285588612.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TR_Name: 'Safari Adventure in Kenya',
        TR_Description:
          'Experience the wildlife and breathtaking landscapes of Kenya.',
        TR_Price: 3000.0,
        TR_StartDate: '2025-07-15',
        TR_EndDate: '2025-07-22',
        TR_TourType: 'Wildlife',
        TR_Destination: 'Kenya',
        TR_Img: 'tourPhoto-1730285193421.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TR_Name: 'Historical Tour of Italy, Rome',
        TR_Description:
          'Visit ancient ruins and enjoy authentic Italian cuisine.',
        TR_Price: 2200.0,
        TR_StartDate: '2025-05-05',
        TR_EndDate: '2025-05-12',
        TR_TourType: 'Cultural',
        TR_Destination: 'Italy',
        TR_Img: 'tourPhoto-1730285423289.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tours', null, {});
  },
};
