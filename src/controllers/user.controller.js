export const getUsers = (_req, res) => {
  res.json({
    message: 'get for users work',
  });
};

export const createUser = (req, res) => {
  res.json({
    message: 'post for users work',
  });
};

export const updateUser = (req, res) => {
  res.json({
    message: 'put for users work',
  });
};

export const deleteUser = (req, res) => {
  res.json({
    message: 'delete for users work',
  });
};

export const authenticate = () => {};
