import model from './../models/index.model.js';
import hashPassword from './../utilities/hashPassword.js';
import config from '../../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//**  +[1] get all users *//
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

//** +[2] get specific user **//
export const getOneUser = async (req, res) => {
  try {
    // get user id from params and check if existing
    const id = req.params.id;
    const user = await model.user.findOne({ where: { id: id } });

    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }

    return res.status(200).json({
      message: 'User found successfully',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

//**  +[3] create new user *//
export const createUser = async (req, res) => {
  try {
    // get data from body
    const data = req.body;

    // check if email existing
    const email = await model.user.findOne({
      where: { email: data.email },
    });

    if (email) {
      return res.status(400).json({
        message: 'this email already used',
      });
    }

    const userObj = {
      name: data.name,
      email: data.email,
      password: hashPassword(data.password),
      phone: data.phone,
      isActive: true,
      createdAt: new Date(),
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

//**  +[4] update specific user *//
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
        updateAt: new Date(),
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

//**  +[5] delete specific user *//
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

//** +[6] Register **/
export const register = async (req, res) => {
  try {
    // get data from the body
    const data = req.body;

    // check if email existing
    const email = await model.user.findOne({
      where: { email: data.email },
    });

    if (email) {
      return res.status(400).json({
        message: 'this email already used',
      });
    }

    const userObj = {
      name: data.name,
      email: data.email,
      password: hashPassword(data.password),
      phone: data.phone,
    };

    const user = await model.user.create(userObj);

    return res.status(201).json({
      message: 'user created successfully waiting for admin approval',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

//** +[7] authenticate user and generate token **//
export const authenticate = async (req, res) => {
  try {
    // get email and password from body
    const { email, password } = req.body;

    // check if email exists or not
    const user = await model.user.findOne({
      where: { email: email },
    });
    if (!email) {
      return res.status(400).json({
        message: 'Email or Password wrong',
      });
    }

    // check validity of password
    const isValidPassword = await bcrypt.compare(
      `${password}${config.pepper}`,
      user.password
    );

    if (!isValidPassword) {
      return res.status(400).json({
        message: 'Email or Password wrong',
      });
    }

    // check user is approved or not
    if (!user.isActive) {
      return res.status(404).json({
        message: 'Waiting for admin approval',
      });
    }

    const token = jwt.sign(
      {
        user_id: user.id,
        isAdmin: user.isAdmin,
      },
      config.tokenSecret
    );

    return res.status(200).json({
      message: 'user logged in successfully',
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//** +[8] approve user to can login **/
export const approveUser = async (req, res) => {
  try {
    // get user id
    const id = req.params.id;

    // check is user exists or not
    const user = await model.user.findOne({ where: { id: id } });
    if (!user) {
      return res.status(400).json({
        message: 'cant find this user',
      });
    }
    // now user is already existing. approve
    await model.user.update(
      {
        isActive: true,
      },
      {
        where: { id: id },
      }
    );

    return res.status(200).json({
      message: 'user approved successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
