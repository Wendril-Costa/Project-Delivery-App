const { login } = require('../services/login.service');

const validateLogin = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await login({ email, password });
  
  return res.status(type).json(message);
};

module.exports = { validateLogin };