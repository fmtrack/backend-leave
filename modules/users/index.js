const express = require('express');
const AuthController = require('./controller/auth');
const schema = require('./schema');
const repository = require('./repository');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

module.exports = {
  router,
  schema,
  repository,
};
