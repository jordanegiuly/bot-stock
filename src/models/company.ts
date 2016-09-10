import * as Sequelize from 'sequelize';

export interface CompanyAttributes {
  name: string;
}

export interface CompanyInstance extends Sequelize.Instance<{}, CompanyAttributes> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

export interface CompanyModel extends Sequelize.Model<CompanyInstance, CompanyAttributes> { }

export default function defineCompany(
  sequelize: Sequelize.Connection, DataTypes: Sequelize.DataTypes
  ): CompanyModel{
  const company = sequelize.define<CompanyInstance, CompanyAttributes>('Company', {
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



// Sequelize.Instance<