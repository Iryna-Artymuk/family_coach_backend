import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import asyncHandler from '../../decorators/acyncHandler.js';

import HttpError from '../../helpers/httpError.js';
import User from '../../models/Users.js';

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  // первіряємо чи є користувач в базі
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, `User with  emais ${email} not found `);
  }
  // якщо пошту не підтверджено викинути помилку
  if (!user.verify) throw HttpError(401, ' you have to verify your email');
  // compare DB password with pasword from frontend

  const comparePassword = await bcrypt.compare(password, user.password);
  console.log(' comparePassword', comparePassword);
  if (!comparePassword) {
    throw HttpError(401, 'email or passwor is incorrect ');
  }

  // if password valid create token
  // 1. creat payload
  //2. create Secret
  // 3. create token with role

  const roles = Object.values(user.roles);

  const payload = {
    userInfo: {
      id: user._id,
      roles,
    },
  };
  const { JWT_SECRET_KEY } = process.env;
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '7d' });
  // update token in DB user:

  await User.findByIdAndUpdate(user._id, { token });

  // sent respond
  res.json({ token, email: user.email, role: roles });
};
export default asyncHandler(userLogin);
