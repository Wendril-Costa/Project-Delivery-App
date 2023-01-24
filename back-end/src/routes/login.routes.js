const express = require('express');
const loginController = require('../controllers/login.controller');

const loginRoutes = express.Router();

loginRoutes.post('/', loginController.validateLogin);

module.exports = loginRoutes; 