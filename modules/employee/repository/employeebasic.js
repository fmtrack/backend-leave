const {
  EmployeeDetails,
  OffRollEmployment,
  OnRollEmployment,
  User,
} = require('../../database');

const { createPassword } = require('../../users/repository/User');
const { Op } = require('sequelize');

const getAllEmployees = (requestBody) => {
  const { offset, limit, entityId } = requestBody;

  return EmployeeDetails.findAndCountAll({
    where: {
      [Op.or]: [
        { employementType: 'ON Roll', onRollEntityId: entityId },
        { employementType: 'OFF Roll', offRollEntityId: entityId },
      ],
    },
    limit: limit,
    offset: (offset - 1) * limit,
    include: { all: true, nested: true },
    order: ['id'],
  });
};

const getEmployeeByID = (requestBody) =>
  EmployeeDetails.findOne({
    where: { id: requestBody.employeeId },
    include: { all: true, nested: true },
  });

const getEmployeeByMob = (requestBody) =>
  User.findOne({
    where: { mobile: requestBody },
  });

const registerEmployee = async (requestBody) => {
  const { mobile } = requestBody;
  const user = await getEmployeeByMob(mobile);
  if (user) {
    throw new Error('This Mobile Number is of Another Employee', user);
  }

  // console.log('a', user);

  const emp = await User.create({
    ...requestBody,
    token: '',
    password: createPassword('123456E'),
    userType: 'employee',
  });

  // console.log('b', emp);

  if (requestBody.employementType === 'ON Roll') {
    const empDetails = await EmployeeDetails.create({
      ...requestBody,
      onrollEntityId: requestBody.companyId,
      userId: emp.id,
    });
    // console.log('c1', empDetails);

    OnRollEmployment.create({
      ...requestBody,
      onrollEntityId: requestBody.companyId,
      employeeDetailId: empDetails.id,
    });

    return empDetails;
  }
  if (requestBody.employementType === 'OFF Roll') {
    const empDetails = await EmployeeDetails.create({
      ...requestBody,
      userId: emp.id,
      onrollEntityId: requestBody.vendorId,
      offrollEntityId: requestBody.companyId,
    });

    // console.log('c2', empDetails);

    OffRollEmployment.create({
      ...requestBody,
      onrollEntityId: requestBody.vendorId,
      offrollEntityId: requestBody.companyId,
      employeeDetailId: empDetails.id,
    });

    return empDetails;
  }
};
module.exports = {
  getAllEmployees,
  getEmployeeByID,
  registerEmployee,
  getEmployeeByMob,
};
