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
    user_id: {
      type: type.INTEGER,
    },
    grade: {
      type: type.INTEGER,
    },
    createdAt: {
      type: type.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: type.DATE,
      allowNull: true,
    },
  });
};
