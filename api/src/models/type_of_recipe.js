const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type_of_recipe', {
    diets: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};


// [ ] Tipo de dieta con las siguientes propiedades:
// ID
// Nombre