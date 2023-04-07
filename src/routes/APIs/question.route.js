import { Router } from 'express';
import * as questionController from './../../controllers/questions.controller.js';

const routes = Router();

routes
  .route('/')
  .get(questionController.getQuestions)
  .post(questionController.createQuestion)
  .put(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

export default routes;
