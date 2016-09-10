import * as Sequelize from 'sequelize';

export interface TransactionFeeAttributes {
  fix: number,
  variable: number,
  operationSide: number,
  region: string
}

export interface TransactionFeeInstance extends Sequelize.Instance<{}, TransactionFeeAttributes> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  fix: number,
  variable: number,
  operationSide: number,
  region: string
}

export interface TransactionFeeModel extends Sequelize.Model<TransactionFeeInstance, TransactionFeeAttributes> { }

export default function defineTransactionFee(
  sequelize: Sequelize.Connection, DataTypes: Sequelize.DataTypes
  ): TransactionFeeModel{
  const TransactionFee = sequelize.define<TransactionFeeInstance, TransactionFeeAttributes>('TransactionFee', {
    fix: DataTypes.FLOAT,
    variable: DataTypes.FLOAT,
    operationSide: DataTypes.INTEGER,
    region: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TransactionFee;
};
