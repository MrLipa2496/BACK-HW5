'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate (models) {}
  }
  Tour.init(
    {
      trName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      trDescription: {
        type: DataTypes.TEXT,
      },
      trPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0.01,
        },
      },
      trStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      trEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isAfter (value) {
            if (new Date(value) <= new Date(this.trStartDate)) {
              throw new Error('trEndDate must be after trStartDate');
            }
          },
        },
      },
      trTourType: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['Leisure', 'Excursion', 'Business trip']],
        },
      },
      trDestination: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Tour',
      underscored: true,
    }
  );
  return Tour;
};
