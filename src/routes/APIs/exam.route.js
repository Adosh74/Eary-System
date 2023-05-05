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
  .get(examController.getOneExam)
  .put(examController.updateExam)
  .delete(isAuthenticated, isAdmin, examController.deleteExam);

export default routes;
