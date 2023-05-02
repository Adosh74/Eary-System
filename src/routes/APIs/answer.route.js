import { Router } from 'express';

import { isAuthenticated } from '../../middleware/authentication.middleware.js';
import * as answerController from './../../controllers/answer.controller.js';

const routes = Router();

routes.route('/').get(answerController.getAnswers);

routes
  .route('/:id')
  // take exam id
  .post(isAuthenticated, answerController.createAnswer)
  // take answer id
  .put(answerController.updateAnswer)
  .delete(answerController.deleteAnswer);

export default routes;
