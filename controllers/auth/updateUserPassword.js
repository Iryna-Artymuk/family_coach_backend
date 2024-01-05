import bcrypt from 'bcryptjs';

import asyncHandler from '../../decorators/acyncHandler.js';

import HttpError from '../../helpers/httpError.js';
import User from '../../models/Users.js';

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.params;
  // первіряємо чи є користувач в базі
  const user = await User.findOne({ _id: id });
  console.log(' user : ', user.password);
  if (!user) {
    throw HttpError(401, `User   not found `);
  }

  const comparePassword = await bcrypt.compare(oldPassword, user.password);

  if (!comparePassword) {
    throw HttpError(401, 'не вірний пароль');
  }

  // if oldPassword valid create  new
  // hash confidentin data
  const salt = await bcrypt.genSalt(10);
  console.log('salt: ', salt);
  const hashNewPassword = await bcrypt.hash(newPassword, salt);

  await User.findByIdAndUpdate({ _id: id }, { password: hashNewPassword });

  // sent respond
  res.status(200).json({ status: 'success', message: 'password updated' });
};
export default asyncHandler(updateUserPassword);
