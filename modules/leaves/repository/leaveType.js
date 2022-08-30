const {
  LeaveType,
} = require('../../database');

const getAllLeaveType = async (requestBody) => {
  return LeaveType.findAll({
    // where: { companyId: requestBody.companyId, isEmployee: 1 },
    include: { all: true, nested: true },
    // include:"*",
  });
};

// const registerEmployeeDocuments = async (requestBody) => {
//   return Documents.create({ ...requestBody });
// };

module.exports = {
  getAllLeaveType,
  // registerEmployeeDocuments,
};
