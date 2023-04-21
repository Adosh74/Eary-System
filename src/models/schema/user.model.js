export default (db, type) => {
  return db.define('user', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    phone: {
      type: type.STRING,
    },
    isActive: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: type.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: type.DATE,
      defaultValue: new Date(),
    },
  });
};
