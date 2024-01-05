import express from 'express';
import {
  getCurrentUser,
  updateUser,
  updateUserPassword,
  updateUserAvatar,
  userLogin,
  userLogout,
  userRegister,
  verifyUserEmail,
} from '../../controllers/auth/index.js';
import {
  validateRegisterUser,
  validateLoginUser,
  authentication,
  // validateEmail,
  vadidateAvatar,
  upload,

} from '../../middlewars/index.js';

//import updateUserAvatar from '../../controllers/auth/updateUserAvatar.js';

const authRouter = express.Router(); // create router

authRouter.post('/users/register', validateRegisterUser, userRegister);
authRouter.post('/users/login', validateLoginUser, userLogin);
authRouter.delete('/users/logout', authentication, userLogout);

authRouter.patch('/users/:id', authentication, updateUser);
authRouter.patch('/users/password/:id', authentication, updateUserPassword);
authRouter.patch(
  '/users/avatar/:id',
  authentication,
  upload.single('avatar'),
  vadidateAvatar,
  updateUserAvatar
);
authRouter.get('/users/current', authentication, getCurrentUser);
authRouter.get('/users/verify/:verificationCode', verifyUserEmail);
// authRouter.post('/users/verify', validateEmail, resendVerifyUserEmail); // resent verificatin code
export default authRouter;
