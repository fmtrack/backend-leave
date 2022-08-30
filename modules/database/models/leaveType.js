'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.LeaveType.belongsTo(models.User, {
      //   as: 'employee',
      //   foreignKey: 'users_id',
      // });

      // models.LeaveType.hasOne(models.OnRollEmployment, {
      //   as: 'employeeOnrollment',
      //   foreignKey: 'employee_details_id',
      // });
      // models.LeaveType.hasOne(models.OffRollEmployment, {
      //   as: 'employeeOffrollment',
      //   foreignKey: 'employee_details_id',
      // });

      // models.LeaveType.hasMany(models.EmployeeAddress, {
      //   as: 'addresses',
      //   foreignKey: 'employee_id',
      // });
    }
  }
  LeaveType.init(
    {
      name : DataTypes.STRING,
      description : DataTypes.STRING,
      allowedInAYear : DataTypes.INTEGER,
      isApplicable : DataTypes.STRING,
      isCarryForward : DataTypes.STRING,
      considerHolidays : DataTypes.STRING,
      accuralBasis : DataTypes.STRING,
      accuralFrequency : DataTypes.STRING,
      accuralPeriod : DataTypes.STRING,

      entityId: {
        type: DataTypes.INTEGER,
        field: 'entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'LeaveType',
      tableName: 'leave_type',
      underscored: true, 
           
      // If don't want createdAt
      createdAt: false,
    
      // If don't want updatedAt
      updatedAt: false,

    }
  );
  return LeaveType;
};
