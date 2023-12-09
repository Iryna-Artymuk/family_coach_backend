import path from 'path';
import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';
import User from '../../models/Users.js';
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
  // res.status(200).json({
  //   messege: 'email verified',
  // });
  //res.sendfile(path.resolve('/success.html'));

  res.sendFile(path.resolve('public', 'success.html'));
};
export default asyncHandler(verifyUserEmail);
