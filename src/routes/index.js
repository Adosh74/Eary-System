import { Router } from 'express';
import userRoutes from './APIs/user.route.js';
import questionRoutes from './APIs/question.route.js';
import answerRoutes from './APIs/answer.route.js';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/question', questionRoutes);
routes.use('/answer', answerRoutes);

export default routes;
