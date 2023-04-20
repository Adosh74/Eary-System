import Sequelize from 'sequelize';
import db from './../../config/database.js';

//* importing models *//
import UserModel from './schema/user.model.js';
import ExamModel from './schema/exam.model.js';
import AnswerModel from './schema/answer.model.js';

const user = UserModel(db, Sequelize);
const exam = ExamModel(db, Sequelize);
const answer = AnswerModel(db, Sequelize);

db.sync({ force: false }).then(() => {
  console.log('Tables Created!');
});

export default {
  user,
  exam,
  answer,
};
