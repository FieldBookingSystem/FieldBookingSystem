const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    field_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'fields',
          key: 'id',
        },
    },
    coach_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'coach',
        key: 'id',
      },
  },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    time_slot: {
        type: DataTypes.INTEGER,
        // prevents null values
        allowNull: false,
        // will only allow alphanumeric characters
       
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking',
  }
);

module.exports = Booking;