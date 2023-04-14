import { Sequelize } from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(
  config.db_database,
  config.db_username,
  config.db_password,
  {
    host: config.db_host,
    port: config.db_prot,
    dialect: config.db_dialect,
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
