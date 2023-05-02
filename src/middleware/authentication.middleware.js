import jwt from 'jsonwebtoken';

import config from './../../config/config.js';

//** +[1] check if the user is authenticated **//
export const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) return res.status(401).send('access denied');

  try {
    const decodedPayload = jwt.verify(token, config.tokenSecret);

    if (!decodedPayload) return res.status(400).send('invalid token');
    req.user = decodedPayload;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};

//** +[2] check if admin **//
export const isAdmin = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('access denied');

  try {
    const decodedPayload = jwt.verify(token, config.tokenSecret);

    if (!decodedPayload) return res.status(400).send('invalid token');

    if (!decodedPayload.isAdmin) {
      return res
        .status(401)
        .send('you are unauthorized access this endpoint');
    }

    next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};
