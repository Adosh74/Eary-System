import jwt from 'jsonwebtoken';
import config from './../../config/config.js';

export const isAuthenticated = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('access denied');

  try {
    const decodedPayload = jwt.verify(token, config.tokenSecret);

    if (!decodedPayload) return res.status(400).send('invalid token');

    next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};
