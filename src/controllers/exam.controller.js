import model from './../models/index.model.js';

//* +[1] get all exams *//
export const getAllExams = async (_req, res) => {
  try {
    //**  get all exams  *//
    const exams = await model.exam.findAll();

    if (exams.length > 0) {
      return res.status(200).json({
        message: 'Exams found successfully',
        data: exams,
      });
    }
    return res.status(404).json({
      message: 'no exam found',
    });
  } catch (error) {
    res.status(500).json({
      message: 'internal error',
    });
  }
};

//** +[2] create new exam **//
export const createExam = async (req, res) => {
  try {
    // get exam data from req body
    const data = req.body;

    const examObj = {
      name: data.name,
      // audio_file: data.audio_file,
      createdAt: new Date(),
    };

    const exam = await model.exam.create(examObj);
    res.status(201).json({
      message: 'exam created successfully',
      data: exam,
    });
  } catch (error) {
    res.status(500).json({
      message: 'internal error',
    });
  }
};

//** +[3] get specific exam **/
export const getOneExam = async (req, res) => {
  try {
    // get exam id from params
    const id = req.params.id;

    const exam = await model.exam.findOne({ where: { id: id } });

    if (exam === null) {
      return res.status(404).json({
        message: 'No exam found for this id',
      });
    }

    return res.status(200).json({
      message: 'exam found successfully',
      data: exam,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal error',
    });
  }
};

//** +[4] update exam mainly use to add question **/
export const updateExam = async (req, res) => {
  try {
    // get id and find which exam to update
    const id = req.params.id;

    const exam = await model.exam.findOne({ where: { id: id } });
    if (exam === null)
      return res.status(404).json({ message: 'no exam found' });

    const { questions } = req.body;

    const questionObj = { ...exam.questions, ...questions };
    await model.exam.update(
      {
        questions: questionObj,
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json({
      message: 'exam updated successfully 👌',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal error',
    });
  }
};

//** +[5] delete exam **/
export const deleteExam = async (req, res) => {
  try {
    // get exam id and check if it exists
    const id = req.params.id;

    const exam = await model.exam.findOne({ where: { id: id } });

    if (exam === null)
      return res.status(404).json({ message: 'No exam found' });

    await model.exam.destroy({ where: { id: id } });

    res.status(200).json({
      message: 'Exam was successfully destroyed',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal error',
    });
  }
};
