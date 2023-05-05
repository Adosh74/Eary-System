import { Router } from 'express';

import {
  isAdmin,
  isAuthenticated,
} from '../../middleware/authentication.middleware.js';
import * as controller from './../../controllers/user.controller.js';

const routes = Router();

routes
  .route('/')
  .get(isAuthenticated, isAdmin, controller.getUsers)
  .post(controller.createUser);
// routes with specific id
routes
  .route('/:id')
  .get(controller.getOneUser)
  .put(isAuthenticated, controller.updateUser)
  .delete(controller.deleteUser);

export default routes;
