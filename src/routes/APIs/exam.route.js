import { Router } from 'express';

import upload from '../../middleware/upload.js';
import * as examController from './../../controllers/exam.controller.js';

const routes = Router();

routes
  .route('/')
  .get(examController.getAllExams)
  .post(upload.single('audio_file'), examController.createExam);

routes
  .route('/:id')
  .get(examController.getOneExam)
  .put(examController.updateExam)
  .delete(examController.deleteExam);

export default routes;
