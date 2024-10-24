'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate (models) {
      Booking.belongsTo(models.Client, {
        foreignKey: {
          name: 'BK_CL_ID',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Booking.belongsTo(models.Tour, {
        foreignKey: {
          name: 'BK_TR_ID',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Booking.init(
    {
      BK_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      BK_Date: DataTypes.DATE,
      BK_Status: DataTypes.STRING,
      BK_TotalAmount: DataTypes.DECIMAL,
      BK_CL_ID: DataTypes.INTEGER,
      BK_TR_ID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
