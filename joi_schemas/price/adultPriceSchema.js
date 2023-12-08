import Joi from 'joi'; // бібліотека валідації
const adultPriceSchema = Joi.object({
  category: Joi.string().valid('Дорослі', 'Діти', 'Лекції').messages({
    'any.only': ` frontend validation error should be a one  of  Дорослі, Діти, Лекції) `,
  }),

  type: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add price type`,
  }),
  amount: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add  amount`,
  }),
  duration: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add duration`,
  }),
  period: Joi.string().required().allow(null, '').messages({
    'any.required': `frontend validation error check again  if you  add   period`,
  }),
  price: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add  price`,
  }),
});

export default adultPriceSchema;
