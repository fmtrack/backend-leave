const { updateEmployeeRepository } = require('../repository');

const { updateEmployee, updateEmployeeAddress, updateEmployeeDocuments } =
  updateEmployeeRepository;

class UpdateEmployee {
  async updateEmployee(req, res) {
    try {
      const user = await updateEmployee(req.body);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async updateEmployeeAddress(req, res) {
    try {
      const user = await updateEmployeeAddress(req.body);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async updateEmployeeDocuments(req, res) {
    try {
      const user = await updateEmployeeDocuments(req.body);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new UpdateEmployee();
