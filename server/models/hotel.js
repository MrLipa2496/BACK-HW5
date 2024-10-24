'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate (models) {
      Hotel.hasMany(models.Tour_Hotel, {
        foreignKey: {
          name: 'TH_HT_ID',
          allowNull: false,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Hotel.init(
    {
      HT_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      HT_Name: DataTypes.STRING,
      HT_Address: DataTypes.STRING,
      HT_Category: DataTypes.STRING,
      HT_Stars: DataTypes.INTEGER,
      HT_Phone: DataTypes.STRING,
      HT_Email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Hotel',
    }
  );
  return Hotel;
};
