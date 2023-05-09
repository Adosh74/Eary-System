import { Router } from 'express';

import {
  isAdmin,
  isAuthenticated,
} from '../../middleware/authentication.middleware.js';
import upload from '../../middleware/upload.js';
import * as examController from './../../controllers/exam.controller.js';

const routes = Router();

routes
  .route('/')
  .get(examController.getAllExams)
  .post(
    isAuthenticated,
    isAdmin,
    upload.single('audio_file'),
    examController.createExam
  );

routes
  .route('/:id')
  .get(isAuthenticated, examController.getOneExam)
  .put(examController.updateExam)
  .delete(isAuthenticated, isAdmin, examController.deleteExam);

routes.put(
  '/:examId/:quesIndex',
  isAuthenticated,
  isAdmin,
  examController.removeQuestion
);

export default routes;
