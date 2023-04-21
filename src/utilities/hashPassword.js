import config from '../../config/config.js';
import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  const salt = parseInt(config.salt, 10);
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};

export default hashPassword;
