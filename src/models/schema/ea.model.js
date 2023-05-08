export default (db, type) => {
  return db.define(
    'examAnswer',
    {
      id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    { timestamps: false }
  );
};
