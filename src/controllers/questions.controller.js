export const getQuestions = (_req, res) => {
  res.json({
    message: 'get questions method working',
  });
};

export const createQuestion = (req, res) => {
  res.json({
    message: 'post questions method working',
  });
};

export const updateQuestion = (req, res) => {
  res.json({
    message: 'put questions method working',
  });
};

export const deleteQuestion = (req, res) => {
  res.json({
    message: 'delete questions method working',
  });
};
