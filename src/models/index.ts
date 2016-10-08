import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'
const basename = path.basename(module.filename)
const config = require('../config/database');

import * as Company from './company'
import * as TransactionFee from './transactionfee'


type Model = Sequelize.Model<{}, {}>;
interface DbConnection {
  Company: Company.CompanyModel;
  TransactionFee: TransactionFee.TransactionFeeModel;
}
export const models = {} as DbConnection;
export const sequelize = new Sequelize(config.url);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file));
    models[model['name']] = model;
  });

// Object.keys(models).forEach((modelName: string) => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models);
//   }
// });

export default models;
