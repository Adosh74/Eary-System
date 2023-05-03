import { Router } from 'express';

import * as controller from './../../controllers/user.controller.js';

const routes = Router();

routes.post('/login', controller.authenticate);
routes.post('/adminLogin', controller.adminLogin);
routes.post('/register', controller.register);
routes.put('/approve/:id', controller.approveUser);

export default routes;
