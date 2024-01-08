import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';
import { nanoid } from 'nanoid';

import { HttpError, creatRoles, sendEmail } from '../../helpers/index.js';
import asyncHandler from '../../decorators/acyncHandler.js';

import User from '../../models/Users.js';
import ROLES_LIST from '../../config/roles_list.js';

const { BASE_URL } = process.env;
const userRegister = async (req, res) => {
  // check if user already exist
  const { email, password, userRoles = 'User' } = req.body;
  const user = await User.findOne({ email });

  // if user true throw error if not make request to create user

  if (user) {
    throw HttpError(409, ` user with email ${email} already exist`.red);
  }
  // hash confidentin data
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const gravatarURL = gravatar.url(email);
  const verificationCode = nanoid();
  const userRolesList = creatRoles(userRoles);

  // -------------CREAT NEW USER-----------
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatar: {
      url: gravatarURL,
      public_id: '',
    },
    roles: userRolesList,
    verificationCode,
  });

  // ------------CREAT EMAIL FROM TEMPLATE----------------

  const adminEmailTemplatePath = path.resolve(
    'templates',
    'verifycationAdminEmail.html'
  );
  const source1 = fs.readFileSync(adminEmailTemplatePath, 'utf-8').toString();
  //Compile the template data into a function
  const adminEmailTemplate = handlebars.compile(source1);
  const adminEmailReplacements = {
    username: newUser.name,
    userRole: userRoles,
    verificationLink: `${BASE_URL}/api/auth/users/verify/${verificationCode}`,
  };
  // add context to dynamic variables
  const verifyAdminhtml = adminEmailTemplate(adminEmailReplacements);

  const verifyAdminData = {
    to: newUser.email, // list of receivers
    subject: 'verify your email ', // Subject line
    text: ' Plese verify your email', // plain text body
    html: verifyAdminhtml,
  };
  const userEmailTemplatePath = path.resolve(
    'templates',
    'verifycationUserEmail.html'
  );
  const userSourcer = fs
    .readFileSync(userEmailTemplatePath, 'utf-8')
    .toString();
  //Compile the template data into a function
  const userEmailTemplate = handlebars.compile(userSourcer);
  const userEmailReplacements = {
    username: newUser.name,
    verificationLink: `${BASE_URL}/api/auth/users/verify/${verificationCode}`,
  };
  // add context to dynamic variables
  const verifyUserhtml = userEmailTemplate(userEmailReplacements);

  const verifyUserData = {
    to: newUser.email, // list of receivers
    subject: 'verify your email ', // Subject line
    text: ' Plese verify your email', // plain text body
    html: verifyUserhtml,
  };

  const emailTemplatePath2 = path.resolve(
    'templates',
    'stopWarStripoEmail.html'
  );
  const source2 = fs.readFileSync(emailTemplatePath2, 'utf-8').toString();
  //Compile the template data into a function
  const template2 = handlebars.compile(source2);
  const replacements2 = {
    username: newUser.name,
  };
  // add context to dynamic variables
  const htmlToSend2 = template2(replacements2);

  const dataToSend2 = {
    to: newUser.email, // list of receivers
    subject: 'Stop War', // Subject line
    text: ' Stop War', // plain text body
    html: htmlToSend2,
  };

  // VERIFY ROLE SEND EMAIL ACORDING TO ROLE

  const roleResult = Object.values(newUser.roles).includes(
    ROLES_LIST.Admin || ROLES_LIST.ContentEditor
  );
  console.log(' roleResult: ', roleResult);
  if (roleResult) {
    sendEmail(verifyAdminData);
    sendEmail(dataToSend2);
  } else {
    sendEmail(verifyUserData);
    sendEmail(dataToSend2);
  }

  // send response to frontend
  res.status(201).json({
    status: 'success',
    name: newUser.name,
    email: newUser.email,
    avatarURL: newUser.avatar.url,
  });
};

export default asyncHandler(userRegister);
