import Joi from 'joi'; // бібліотека валідації
const addFeedbackSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': `frontend validation error check again  if you  add name`,
  }),

  feedback: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add feedback text`,
  }),
  approved: Joi.boolean(),
});
const feedbackStatusSchema = Joi.object({
  approved: Joi.boolean()
    .required()
    .messages({ 'any.required': 'missing field approved' }),
});

export default {
  feedbackStatusSchema,
  addFeedbackSchema,
};
