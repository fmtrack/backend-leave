'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveAvailable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeaveAvailable.init(
    {
      employee_id: DataTypes.INTEGER,
      leavesAccruedThisMonth:DataTypes.INTEGER,
      leavesTakenThisMonth:DataTypes.INTEGER,
      leaveRemaining:DataTypes.INTEGER,

      leaveTypeId: {
        type: DataTypes.INTEGER,
        field: 'leave_type_id',
        references: {
          model: {
            tableName: 'leave_type',
          },
          key: 'id',
        },
        allowNull: false,
      },
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
      modelName: 'LeaveAvailable',
      tableName: 'leave_available',
      underscored: true,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,

    }
  );
  return LeaveAvailable;
};
