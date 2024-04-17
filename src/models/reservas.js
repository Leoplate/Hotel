'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservas.init({
    dni: DataTypes.INTEGER,
    Habitacion: DataTypes.INTEGER,
    Estrellas: DataTypes.INTEGER,
    CantPersonas: DataTypes.INTEGER,
    FechaIngreso: DataTypes.STRING,
    CantDias: DataTypes.INTEGER,
    FechaEgreso: DataTypes.STRING,
    Precio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};