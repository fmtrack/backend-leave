const {
  LeaveAvailable,
  Documents,
} = require('../../database');

const getAllLeaveAvailability = async (requestBody) => {
  return LeaveAvailable.findAll({
    // where: { companyId: requestBody.companyId, isEmployee: 1 },
    include: { all: true, nested: true },
    // include:"*",
  });
};

// const registerEmployeeDocuments = async (requestBody) => {
//   return Documents.create({ ...requestBody });
// };

module.exports = {
  getAllLeaveAvailability,
  // registerEmployeeDocuments,
};
