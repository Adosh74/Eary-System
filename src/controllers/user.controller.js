import model from './../models/index.model.js';
import hashPassword from './../utilities/hashPassword.js';

export const getUsers = async (_req, res) => {
  try {
    // Get users
    const users = await model.user.findAll();
    if (users.length > 0) {
      return res.status(200).json({ users: users });
    }
    return res.status(404).json({
      message: 'No users found',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal error',
    });
  }
};

export const createUser = async (req, res) => {
  try {
    // get data from body
    const data = req.body;
    const userObj = {
      name: data.name,
      email: data.email,
      password: hashPassword(data.password),
      phone: data.phone,
    };

    const user = await model.user.create(userObj);

    res.status(201).json({
      message: 'User created successfully ✔',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal error',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    // get id from from param
    const id = req.params.id;
    //* check user exists or not *//
    const user = await model.user.findOne({ where: { id: id } });
    if (user === null)
      return res.status(404).json({ message: 'user not found' });

    //* get data from body and update user
    const { name, email, phone } = req.body;

    await model.user.update(
      {
        name: name,
        email: email,
        phone: phone,
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json({
      message: 'user updated successfully 👌',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal error',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // get id from the param and check existing user
    const id = req.params.id;
    const user = await model.user.findOne({ where: { id: id } });
    if (user === null)
      return res.status(404).json({ message: 'user not found' });

    //* delete user *//
    await model.user.destroy({ where: { id: id } });

    res.status(200).json({
      message: 'user deleted successfully ⛏',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal error',
    });
  }
};

export const authenticate = () => {};
