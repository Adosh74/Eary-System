export default (db, type) => {
  return db.define('exam', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    questions: {
      type: type.JSON,
    },
    audio_file: {
      type: type.STRING,
    },
    isActive: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
  });
};
