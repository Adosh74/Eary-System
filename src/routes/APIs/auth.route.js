import { Router } from 'express';

import {
  isAdmin,
  isAuthenticated,
} from '../../middleware/authentication.middleware.js';
import * as controller from './../../controllers/user.controller.js';

const routes = Router();

routes.post('/login', controller.authenticate);
routes.post('/adminLogin', controller.adminLogin);
routes.post('/register', controller.register);
routes.put(
  '/approve/:id',
  isAuthenticated,
  isAdmin,
  controller.approveUser
);

export default routes;
