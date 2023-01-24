module.exports = function passwordValidate(password) {
  const minLength = 5;
  if (password.length >= minLength) {
    return true;
  }
};
