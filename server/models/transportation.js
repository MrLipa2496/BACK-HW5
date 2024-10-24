'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportation extends Model {
    static associate (models) {
      Transportation.hasMany(models.Tour_Transportation, {
        foreignKey: {
          name: 'TT_TRP_ID',
          allowNull: false,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Transportation.init(
    {
      TRP_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TRP_Type: DataTypes.STRING,
      TRP_CarrierName: DataTypes.STRING,
      TRP_Cost: DataTypes.DECIMAL,
      TRP_Phone: DataTypes.STRING,
      TRP_Email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Transportation',
    }
  );
  return Transportation;
};
