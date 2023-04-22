import { Router } from 'express';
import * as examController from './../../controllers/exam.controller.js';

const routes = Router();

routes
  .route('/')
  .get(examController.getAllExams)
  .post(examController.createExam);

routes
  .route('/:id')
  .get(examController.getOneExam)
  .put(examController.updateExam)
  .delete(examController.deleteExam);

export default routes;
