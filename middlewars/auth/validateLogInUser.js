import Joi from 'joi'; // бібліотека валідації
import { HttpError } from '../../helpers/index.js';
//  ----Joi schema to check data from frontend
// it is must match mongoose schema

const emailRegExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const JoiLogInUserSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegExpr).messages({
    'any.required': `frontend validation error check again  if you  added   email`,
  }),
  password: Joi.string().required().min(6).messages({
    'string.min':
      'Frontend validation error  password should be min 6 characters..',
    'any.required': `Frontend validation error check again  if you  added   password`,
  }),
});
const validateLogInUser = (req, res, next) => {
  const validateResult = JoiLogInUserSchema.validate(req.body);
  // console.log('validateResult: ', validateResult);
  const { error } = validateResult;

  if (error) throw HttpError(400, error.message);
  // якщо не буде всіх даних  error === true спрацює HttpError(400, validateResult.messages) і код перерветься спрацює функція обробки помилок app.js
  //  error.message буде message з схеми валідації
  next();
};

export default validateLogInUser;
