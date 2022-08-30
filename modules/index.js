const express = require('express');
const userModule = require('./users');
const employeeModule = require('./employee');
const commonModule = require('./common');
const leaveModule = require('./leaves');
const apiRoutes = express.Router();

apiRoutes.use('/employee', employeeModule.router);
apiRoutes.use('/user', userModule.router);
apiRoutes.use('/common', commonModule.router);
apiRoutes.use('/leave', leaveModule.router);

module.exports = apiRoutes;
