'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate (models) {
      Tour.hasMany(models.Booking, {
        foreignKey: {
          name: 'BK_TR_ID',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Tour.hasMany(models.Tour_Transportation, {
        foreignKey: {
          name: 'TT_TR_ID',
          allowNull: false,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Tour.hasMany(models.Tour_Hotel, {
        foreignKey: {
          name: 'TH_TR_ID',
          allowNull: false,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Tour.init(
    {
      TR_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TR_Name: DataTypes.STRING,
      TR_Description: DataTypes.TEXT,
      TR_Price: DataTypes.DECIMAL,
      TR_StartDate: DataTypes.DATE,
      TR_EndDate: DataTypes.DATE,
      TR_TourType: DataTypes.STRING,
      TR_Destination: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tour',
    }
  );
  return Tour;
};
