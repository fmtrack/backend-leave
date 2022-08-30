const {
  employeeAddress,
  employeeDetails,
  employeeRegister,
} = require('../schema');

const {
  employeeRepository,
  employeeAdditionalRepository,
} = require('../repository');

const { getAllEmployees, getEmployeeByID, registerEmployee } =
  employeeRepository;
const {
  registerEmployeeAddress,
  getrequiredDocumentListForEmployee,
  registerEmployeeDocuments,
} = employeeAdditionalRepository;

class Employee {
  async registerEmployee(req, res) {
    try {
      await employeeRegister.validate(req.body);
      const user = await registerEmployee(req.body);

      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async getEmployee(req, res) {
    try {
      const employee = await getEmployeeByID(req.query);
      return res.send(employee);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async getAllEmployees(req, res) {
    try {
      const employees = await getAllEmployees(req.query);
      return res.send(employees);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async registerEmployeeAddress(req, res) {
    try {
      await employeeAddress.validate(req.body);
      const user = await registerEmployeeAddress(req.body);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async registerEmployeeDocuments(req, res) {
    try {
      await employeeDetails.validate(req.body);
      const user = await registerEmployeeDocuments(req.body);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async getrequiredDocumentList(req, res) {
    try {
      const employeeDocList = await getrequiredDocumentListForEmployee(
        req.query
      );
      return res.send(employeeDocList);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new Employee();
