
const LeaveTypeRepository = require('./leaveType');
const LeaveRequestRepository = require('./leaveRequest');
const LeaveAvailableRepository = require('./leaveAvailable');

const CreateLeaveRepository = require('./createLeave');
const UpdateLeaveRepository = require('./updateLeave');

module.exports = {
  LeaveTypeRepository,
  LeaveRequestRepository,
  LeaveAvailableRepository,
  CreateLeaveRepository,
  UpdateLeaveRepository
};
