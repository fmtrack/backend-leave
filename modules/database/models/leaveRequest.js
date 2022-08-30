'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeaveRequest.init(
    {
      employee_id: DataTypes.INTEGER,
      startDateTime: DataTypes.DATE,
      endDateTime: DataTypes.DATE,
      approvingAuthorityId:DataTypes.INTEGER,
      status: DataTypes.STRING,
      appliedOn: DataTypes.DATE,
      statusLastUpdated: DataTypes.DATE,
      totalLeavesToConsider: DataTypes.INTEGER,


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
      modelName: 'LeaveRequest',
      tableName: 'leave_request',
      underscored: true,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,

    }
  );
  return LeaveRequest;
};
