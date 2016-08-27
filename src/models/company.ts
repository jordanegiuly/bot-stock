import * as Sequelize from 'sequelize';


export default function(sequelize, DataTypes) {
  const company = sequelize.define('company', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return company;
};