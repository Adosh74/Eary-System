import { Router } from 'express';
import * as controller from './../../controllers/user.controller.js';

const routes = Router();

routes.post('/login', controller.authenticate);

export default routes;
