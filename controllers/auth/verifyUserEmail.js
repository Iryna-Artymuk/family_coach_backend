import path from 'path';
import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import User from '../../models/Users.js';
import ROLES_LIST from '../../config/roles_list.js';
const verifyUserEmail = async (req, res) => {
  // беремо  код верифікації  з рядка запиту і

  const { verificationCode } = req.params;
  // превіряєм чи є в базі користувач з таким кодом

  const user = await User.findOne({ verificationCode });

  if (!user) {
    return res.sendFile(path.resolve('public', 'error.html'));
    //throw HttpError(404, ` email already verify or  user not exist`);
  }
  // якщо користувач є оновюємо поле verify
  await User.findOneAndUpdate(user._id, {
    verify: true,
    verificationCode: '',
  });

  console.log('user.roles: ', user.roles);

  const roleResult = Object.values(user.roles).includes(
    ROLES_LIST.Admin || ROLES_LIST.ContentEditor
  );
  console.log(' roleResult: ', roleResult);
  if (roleResult) {
    res.sendFile(path.resolve('public', 'successAdmin.html'));
  } else {
    res.sendFile(path.resolve('public', 'successUser.html'));
  }
};
export default asyncHandler(verifyUserEmail);
