const {  allLeaveType} = require('../schema');

const {  LeaveTypeRepository,LeaveRequestRepository,LeaveAvailableRepository,CreateLeaveRepository,UpdateLeaveRepository} = require('../repository');

const { getAllLeaveType } = LeaveTypeRepository;
const { getAllLeaveRequest } = LeaveRequestRepository;
const { getAllLeaveAvailability } = LeaveAvailableRepository;
const { createLeaveType } = CreateLeaveRepository;
const { updateLeaveType } = UpdateLeaveRepository;

class Leave {

  async getAllLeaveType(req, res) {
    try {
      const leave = await getAllLeaveType(req.query);
      return res.send(leave);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async getAllLeaveRequest(req, res) {
    try {
      const leave = await getAllLeaveRequest(req.query);
      return res.send(leave);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async getAllLeaveAvailability(req, res) {
    try {
      const leave = await getAllLeaveAvailability(req.query);
      return res.send(leave);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async createLeaveType(req, res) {
    try {
      const leave = await createLeaveType(req.body);
      return res.send(leave);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async updateLeaveType(req, res) {
    try {
      const leave = await updateLeaveType(req.body);
      return res.send(leave);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

}

module.exports = new Leave();