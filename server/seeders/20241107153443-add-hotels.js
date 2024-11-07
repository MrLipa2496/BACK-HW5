'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Hotels',
      [
        // США
        {
          HT_Name: 'The Ritz-Carlton',
          HT_Address: '160 E Pearson St, Chicago, IL 60611, USA',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '312-266-1000',
          HT_Email: 'reservations@ritzcarlton.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Hilton Garden Inn',
          HT_Address: '1715 S Broadway, Los Angeles, CA 90015, USA',
          HT_Category: 'Business',
          HT_Stars: 4,
          HT_Phone: '213-748-1299',
          HT_Email: 'hiltongarden@hilton.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Великобританія
        {
          HT_Name: 'The Dorchester',
          HT_Address: '53 Park Lane, London W1K 1QA, UK',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+44 20 7629 8888',
          HT_Email: 'info@thedorchester.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Premier Inn',
          HT_Address: 'Southampton Rd, London, NW2 2DX, UK',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+44 333 003 0025',
          HT_Email: 'reservations@premierinn.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Франція
        {
          HT_Name: 'Le Meurice',
          HT_Address: '228 Rue de Rivoli, 75001 Paris, France',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+33 1 44 58 10 10',
          HT_Email: 'lemeurice@dorchestercollection.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Ibis Paris Montmartre',
          HT_Address: '5 Rue Caulaincourt, 75018 Paris, France',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+33 1 53 41 45 45',
          HT_Email: 'ibismontmartre@accor.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Італія
        {
          HT_Name: 'Hotel Danieli',
          HT_Address: 'Riva degli Schiavoni, 30122 Venezia VE, Italy',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+39 041 528 9988',
          HT_Email: 'danieli@luxurycollection.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'B&B Hotel Milano',
          HT_Address: 'Via Della Moscova, 13, 20121 Milano MI, Italy',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+39 02 762 1530',
          HT_Email: 'milano@hotelbb.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Японія
        {
          HT_Name: 'The Peninsula Tokyo',
          HT_Address: '1-8-1 Yurakucho, Chiyoda City, Tokyo, 100-0006, Japan',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+81 3 6270 2888',
          HT_Email: 'reservations@peninsula.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Shinjuku Washington Hotel',
          HT_Address:
            '3-2-9 Nishi-Shinjuku, Shinjuku City, Tokyo 160-0023, Japan',
          HT_Category: 'Business',
          HT_Stars: 4,
          HT_Phone: '+81 3 3343 3111',
          HT_Email: 'shinjuku@washington-hotels.jp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Австралія
        {
          HT_Name: 'The Langham',
          HT_Address: '1 Southgate Ave, Southbank VIC 3006, Australia',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+61 3 8696 8888',
          HT_Email: 'reservations@langhamhotels.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Ibis Budget Sydney East',
          HT_Address: '5-7 New South Head Rd, Edgecliff NSW 2027, Australia',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+61 2 9363 9288',
          HT_Email: 'ibisbudget@accorhotels.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Канаду
        {
          HT_Name: 'Fairmont Chateau Frontenac',
          HT_Address: '1 Rue des Carrières, Québec City, QC G1R 4P5, Canada',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+1 418-692-3861',
          HT_Email: 'chateaufrontenac@fairmont.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Travelodge by Wyndham',
          HT_Address: '1020 8th Ave SW, Calgary, AB T2P 1J2, Canada',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+1 403-263-2100',
          HT_Email: 'calgary@travelodge.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Мексика
        {
          HT_Name: 'Hotel Marquis Reforma',
          HT_Address: 'Paseo de la Reforma 465, 06500 Mexico City, Mexico',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+52 55 5282 9999',
          HT_Email: 'reservations@hotelmarquis.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Posada Maria Luisa',
          HT_Address: 'Av. Revolución 262, 06300 Mexico City, Mexico',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+52 55 5552 0037',
          HT_Email: 'posadamaria@posadamarialuisa.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Греція
        {
          HT_Name: 'Hotel Grande Bretagne',
          HT_Address: 'Syntagma Square, Athens 105 64, Greece',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+30 21 0331 0811',
          HT_Email: 'reservations@grandebretagne.gr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Athens Gate Hotel',
          HT_Address: '10 Syngrou Avenue, 11742 Athens, Greece',
          HT_Category: 'Business',
          HT_Stars: 4,
          HT_Phone: '+30 21 0924 7411',
          HT_Email: 'info@athensgate.gr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Іспанія
        {
          HT_Name: 'Hotel Arts Barcelona',
          HT_Address: 'Carrer de la Marina, 19-21, 08005 Barcelona, Spain',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+34 93 221 1000',
          HT_Email: 'arts.barcelona@ritzcarlton.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Hostal Barcelona',
          HT_Address: 'Carrer de la Vila, 4, 08012 Barcelona, Spain',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+34 93 218 1935',
          HT_Email: 'info@hostalbarcelona.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Португалія
        {
          HT_Name: 'Pestana Palace Lisboa',
          HT_Address: 'Rua Jau 54, 1300-314 Lisbon, Portugal',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+351 21 361 2500',
          HT_Email: 'pestana.palace.lisboa@pestana.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'Ibis Lisboa',
          HT_Address: 'Avenida D. Joao II, Parque das Nacoes, Lisbon, Portugal',
          HT_Category: 'Budget',
          HT_Stars: 3,
          HT_Phone: '+351 21 006 3800',
          HT_Email: 'ibis.lisboa@accor.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Туреччина
        {
          HT_Name: 'Four Seasons Hotel Istanbul at Sultanahmet',
          HT_Address:
            'Tevkifhane Sk. No:1, 34110 Sultanahmet, Istanbul, Turkey',
          HT_Category: 'Luxury',
          HT_Stars: 5,
          HT_Phone: '+90 212 402 3000',
          HT_Email: 'reservations@fourseasons.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          HT_Name: 'The Marmara Taksim',
          HT_Address: 'Taksim Square, Istanbul 34437, Turkey',
          HT_Category: 'Business',
          HT_Stars: 4,
          HT_Phone: '+90 212 334 8300',
          HT_Email: 'info@marmarataksim.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  },
};
