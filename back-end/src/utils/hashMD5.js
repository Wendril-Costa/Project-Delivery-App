const crypto = require('crypto');

const compareHash = (password, originalHash) => {
  const newHash = crypto.createHash('md5').update(password).digest('hex');
  return newHash === originalHash;
};
module.exports = { compareHash };