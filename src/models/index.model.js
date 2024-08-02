import Sequelize from 'sequelize';

import db from './../../config/database.js';
import AnswerModel from './schema/answer.model.js';
// import examAnswerModel from './schema/ea.model.js';
import ExamModel from './schema/exam.model.js';
//* importing models *//
import UserModel from './schema/user.model.js';
import { createAdminUser } from '../controllers/user.controller.js';

const user = UserModel(db, Sequelize);
const exam = ExamModel(db, Sequelize);
const answer = AnswerModel(db, Sequelize);
// const examAnswer = examAnswerModel(db, Sequelize);

exam.belongsTo(user, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
user.hasMany(exam);

answer.belongsTo(exam, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
exam.hasMany(answer);

db.sync({ force: false }).then(() => {
  console.log('Tables Created!');
  createAdminUser();
});

export default {
  user,
  exam,
  answer,
};
