const {
  LeaveRequest,
  Documents,
} = require('../../database');

const getAllLeaveRequest = async (requestBody) => {
  return LeaveRequest.findAll({
    // where: { companyId: requestBody.companyId, isEmployee: 1 },
    include: { all: true, nested: true },
    // include:"*",
  });
};

// const registerEmployeeDocuments = async (requestBody) => {
//   return Documents.create({ ...requestBody });
// };

module.exports = {
  getAllLeaveRequest,
  // registerEmployeeDocuments,
};
