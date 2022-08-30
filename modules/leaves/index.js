const express = require('express');
const repository = require('./repository');
const schema = require('./schema');

const LeaveController = require('../leaves/controller/leave');

const router = express.Router();

const allLeaveType = express.Router();
allLeaveType.get('/list', LeaveController.getAllLeaveType);
allLeaveType.post('/add', LeaveController.createLeaveType);
allLeaveType.patch('/update', LeaveController.updateLeaveType);

const allLeaveReq = express.Router();
allLeaveReq.get('/list', LeaveController.getAllLeaveRequest);

const allLeaveAvailability = express.Router();
allLeaveAvailability.get('/list', LeaveController.getAllLeaveAvailability);

router.use('/leave-type', allLeaveType);
router.use('/leave-request', allLeaveReq);
router.use('/leave-available', allLeaveAvailability);

module.exports = {
  router,
  schema,
  repository,
};
