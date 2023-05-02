import model from './../models/index.model.js';

export const getAnswers = (_req, res) => {
  res.json({
    message: 'Get Answers method working',
  });
};

export const createAnswer = async (req, res) => {
  try {
    // get exam_id from params
    const exam_id = req.params.id;
    const user_id = req.user.user_id;
    const answer = req.body.answer;
    if (!answer) {
      return res.status(400).json({
        message: 'enter all answers',
      });
    }
    const exam = await model.exam.findOne({ where: { id: exam_id } });
    let grade = 0;

    for (let i = 0; i < exam.questions.length; i++) {
      if (exam.questions[i].answer === answer[i]) {
        grade = grade + 1;
      }
    }
    const answerObj = {
      answer: answer,
      exam_id: exam_id,
      user_id: user_id,
      grade: grade,
      createdAt: new Date(),
    };

    const answerDao = await model.answer.create(answerObj);

    return res.status(201).json({
      message: 'Answer created successfully',
      grade: answerDao.grade,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const updateAnswer = (req, res) => {
  res.json({
    message: 'put Answers method working',
  });
};

export const deleteAnswer = (req, res) => {
  res.json({
    message: 'delete Answers method working',
  });
};
