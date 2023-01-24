module.exports = function passwordValidate(password) {
  const minLength = 6;
  if (password.length >= minLength) {
    return true;
  }
};
