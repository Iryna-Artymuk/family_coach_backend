import express from 'express';
// import {
//   getCurrentUser,
//   resendVerifyUserEmail,
//   updateAvatar,
//   updateUser,
//   userLogin,
//   userLogout,
//   userRegister,
//   verifyUserEmail,
// } from '../../controllers/auth/index.js';
// import {
//   validateRegisterUser,
//   validateLoginUser,
//   authentication,
//   vadidateSubscription,
//   upload,
//   validateEmail,
// } from '../../middlewars/index.js';

const authRouter = express.Router(); // create router

// authRouter.post('/users/register', validateRegisterUser, userRegister);
// authRouter.post('/users/login', validateLoginUser, userLogin);
// authRouter.delete('/users/logout', authentication, userLogout);

// authRouter.patch('/users', authentication, vadidateSubscription, updateUser);
// authRouter.patch(
//   '/users/avatars',
//   authentication,
//   upload.single('avatar'),
//   updateAvatar
// );

// authRouter.get('/users/current', authentication, getCurrentUser);

// authRouter.get('/users/verify/:verificationCode', verifyUserEmail);
// authRouter.post('/users/verify', validateEmail, resendVerifyUserEmail); // resent verificatin code
export default authRouter;
