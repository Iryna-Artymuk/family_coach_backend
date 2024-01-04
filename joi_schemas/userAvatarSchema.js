import { HttpError } from '../helpers/index.js';
import Joi from 'joi'; // бібліотека валідації
//  ----Joi schema to check data from frontend
// it is must match mongoose schema

const userAvatarSchema = Joi.object({
  avatar: {
    filename: Joi.string().required(),
    path: Joi.string().required(),
    headers: Joi.object({
      'content-disposition': Joi.string().required(),
      'content-type': Joi.string()
        .valid('image/jpeg', 'image/jpg', 'image/png', 'image/JPG')
        .required(),
    }).unknown(),
  },
});

export default userAvatarSchema;
