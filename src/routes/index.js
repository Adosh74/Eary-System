import { Router } from 'express';
import userRoutes from './APIs/user.route.js';
import questionRoutes from './APIs/question.route.js';
import answerRoutes from './APIs/answer.route.js';
import examRoutes from './APIs/exam.route.js';
import auth from './APIs/auth.route.js';

const routes = Router();

routes.use('/', auth);
routes.use('/user', userRoutes);
routes.use('/question', questionRoutes);
routes.use('/answer', answerRoutes);
routes.use('/exam', examRoutes);

export default routes;
