const {
  EmployeeAddress,
  CompanyDocuments,
  Documents,
} = require('../../database');

const registerEmployeeAddress = async (requestBody) => {
  return EmployeeAddress.create({
    ...requestBody,
    // emailContact: emailContact.toLowerCase(),
  });
};

const getrequiredDocumentListForEmployee = async (requestBody) => {
  return CompanyDocuments.findAll({
    where: { companyId: requestBody.companyId, isEmployee: 1 },
    include: { all: true, nested: true },
  });
};

const registerEmployeeDocuments = async (requestBody) => {
  return Documents.create({ ...requestBody });
};

module.exports = {
  registerEmployeeAddress,
  getrequiredDocumentListForEmployee,
  registerEmployeeDocuments,
};
