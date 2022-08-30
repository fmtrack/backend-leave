const express = require('express');
const repository = require('./repository');
const schema = require('./schema');

const EmployeeController = require('./controller/Employee');
const UpdateEmployeeController = require('./controller/UpdateEmployee');

const router = express.Router();

const employeeBasic = express.Router();
employeeBasic.get('/list', EmployeeController.getAllEmployees);
employeeBasic.get('/', EmployeeController.getEmployee);
employeeBasic.post('/add', EmployeeController.registerEmployee);
employeeBasic.patch('/edit', UpdateEmployeeController.updateEmployee);

const employeeDocument = express.Router();
employeeDocument.post('/add', EmployeeController.registerEmployeeDocuments);
employeeDocument.get('/required', EmployeeController.getrequiredDocumentList);
employeeBasic.patch('/edit', UpdateEmployeeController.updateEmployeeDocuments);

const employeeAddress = express.Router();
employeeAddress.post('/add', EmployeeController.registerEmployeeAddress);
employeeBasic.patch('/edit', UpdateEmployeeController.updateEmployeeDocuments);

router.use('/employee-basic', employeeBasic);
router.use('/employee-document', employeeDocument);
router.use('/employee-address', employeeAddress);

module.exports = {
  router,
  schema,
  repository,
};
