const {
  LeaveType,
  LeaveRequest,
  LeaveAvailable
} = require('../../database');

const updateLeaveType = async ({ params, data }) => {
  const oldData = await LeaveType.findOne({
    where: { id: params.leaveId },
  });

  return oldData.update({
    ...data,
  });
};

// const updateEmployeeDocuments = async ({ params, data }) => {
//   const oldData = await Documents.findOne({
//     where: { id: params.employeeDocumentId },
//   });

//   return oldData.update({
//     ...data,
//   });
// };

// const getEmployeeUserById = (id) => {
//   return User.findOne({
//     where: {
//       id: id,
//       userType: 'employee',
//     },
//   });
// };

// const updateEmployee = async ({ params, data }) => {
//   const oldData = await EmployeeDetails.findOne({
//     where: { id: params.employeeId },
//   });
//   oldData.update({
//     ...data,
//   });

//   const user = await getEmployeeUserById(oldData.userId);
//   return user.update({
//     ...data,
//   });
// };

module.exports = {
  updateLeaveType
};
