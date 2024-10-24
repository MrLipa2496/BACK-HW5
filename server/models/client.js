'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate (models) {
      Client.hasMany(models.Booking, {
        foreignKey: {
          name: 'BK_CL_ID',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Client.init(
    {
      CL_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CL_FirstName: DataTypes.STRING,
      CL_LastName: DataTypes.STRING,
      CL_DateOfBirth: DataTypes.DATE,
      CL_Phone: DataTypes.STRING,
      CL_Email: DataTypes.STRING,
      CL_Address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Client',
    }
  );
  return Client;
};
