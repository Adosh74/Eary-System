import { Router } from 'express';
import * as answerController from './../../controllers/answer.controller.js';

const routes = Router();

routes
  .route('/')
  .get(answerController.getAnswers)
  .post(answerController.createAnswer)
  .put(answerController.updateAnswer)
  .delete(answerController.deleteAnswer);

export default routes;
