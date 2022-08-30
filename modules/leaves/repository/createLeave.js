const {
  LeaveType,
  LeaveRequest,
  LeaveAvailable,
} = require('../../database');

const createLeaveType = async (reqBody) => {
  return LeaveType.create({
    ...reqBody,
  });
};

module.exports = {
  createLeaveType
};
