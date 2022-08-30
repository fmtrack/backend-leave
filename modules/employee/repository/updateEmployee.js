const {
  User,
  EmployeeDetails,
  EmployeeAddress,
  Documents,
} = require('../../database');

const updateEmployeeAddress = async ({ params, data }) => {
  const oldData = await EmployeeAddress.findOne({
    where: { id: params.employeeAddressId },
  });

  return oldData.update({
    ...data,
  });
};

const updateEmployeeDocuments = async ({ params, data }) => {
  const oldData = await Documents.findOne({
    where: { id: params.employeeDocumentId },
  });

  return oldData.update({
    ...data,
  });
};

const getEmployeeUserById = (id) => {
  return User.findOne({
    where: {
      id: id,
      userType: 'employee',
    },
  });
};

const updateEmployee = async ({ params, data }) => {
  const oldData = await EmployeeDetails.findOne({
    where: { id: params.employeeId },
  });
  oldData.update({
    ...data,
  });

  const user = await getEmployeeUserById(oldData.userId);
  return user.update({
    ...data,
  });
};

module.exports = {
  updateEmployeeAddress,
  updateEmployee,
  updateEmployeeDocuments,
};
