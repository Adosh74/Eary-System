export default (db, type) => {
  return db.define('answer', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    answer: {
      type: type.JSON,
    },
    exam_id: {
      type: type.INTEGER,
    },
    user_id: {
      type: type.INTEGER,
    },
    grade: {
      type: type.INTEGER,
    },
  });
};