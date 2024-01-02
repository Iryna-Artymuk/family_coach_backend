import express from 'express';
import {
  getCurrentUser,
  updateUser,
  userLogin,
  userLogout,
  userRegister,
  verifyUserEmail,
} from '../../controllers/auth/index.js';
import {
  validateRegisterUser,
  validateLoginUser,
  authentication,
  validateEmail,
} from '../../middlewars/index.js';

const authRouter = express.Router(); // create router

authRouter.post('/users/register', validateRegisterUser, userRegister);
authRouter.post('/users/login', validateLoginUser, userLogin);
authRouter.delete('/users/logout', authentication, userLogout);
authRouter.patch('/users', authentication, updateUser);
authRouter.patch('/users/password', authentication, updateUser);

authRouter.get('/users/current', authentication, getCurrentUser);

authRouter.get('/users/verify/:verificationCode', verifyUserEmail);
// authRouter.post('/users/verify', validateEmail, resendVerifyUserEmail); // resent verificatin code
export default authRouter;
