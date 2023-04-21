import dotenv from 'dotenv';

dotenv.config();

const {
  DB_PORT,
  DB_HOST,
  DB_DIALECT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  BCRYPT_PASSWORD,
  SALT_ROUNDS,
  TOKEN_SECRET,
  PORT,
  HOST,
  // eslint-disable-next-line no-undef
} = process.env;

export default {
  db_prot: DB_PORT,
  db_host: DB_HOST,
  db_dialect: DB_DIALECT,
  db_username: DB_USERNAME,
  db_password: DB_PASSWORD,
  db_database: DB_DATABASE,
  pepper: BCRYPT_PASSWORD,
  salt: SALT_ROUNDS,
  tokenSecret: TOKEN_SECRET,
  port: PORT,
  host: HOST,
};
