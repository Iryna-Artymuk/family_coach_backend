import asyncHandler from '../../decorators/acyncHandler.js';
import User from '../../models/Users.js';

const userLogOut = async (req, res) => {
  const { user } = req;

  await User.findByIdAndUpdate(user._id, { token: '' });
  res.json({
    status: 'success',
    message: 'successfully logout',
  });
};

export default asyncHandler(userLogOut);
