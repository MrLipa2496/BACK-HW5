'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tours', {
      tr_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      tr_description: {
        type: Sequelize.TEXT,
      },
      tr_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tr_startdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tr_enddate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tr_tourtype: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Leisure', 'Excursion', 'Business trip']],
        },
      },
      tr_destination: {
        type: Sequelize.STRING(100),
        allowNull: false,
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

    // Додаємо перевірку для 'tr_price' щоб ціна була більше нуля
    await queryInterface.addConstraint('tours', {
      fields: ['tr_price'],
      type: 'check',
      name: 'check_tr_price',
      where: {
        tr_price: {
          [Sequelize.Op.gt]: 0,
        },
      },
    });

    // Додаємо перевірку для дат, щоб 'tr_enddate' був після 'tr_startdate'
    await queryInterface.addConstraint('tours', {
      fields: ['tr_startdate', 'tr_enddate'],
      type: 'check',
      name: 'check_tr_dates',
      where: {
        tr_enddate: {
          [Sequelize.Op.gte]: Sequelize.col('tr_startdate'),
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tours');
  },
};
