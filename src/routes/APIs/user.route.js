import { Router } from 'express';
import * as controller from './../../controllers/user.controller.js';
import {
  isAuthenticated,
  isAdmin,
} from '../../middleware/authentication.middleware.js';

const routes = Router();

routes
  .route('/')
  .get(controller.getUsers)
  .post(controller.createUser);
// routes with specific id
routes
  .route('/:id')
  .get(controller.getOneUser)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

export default routes;
