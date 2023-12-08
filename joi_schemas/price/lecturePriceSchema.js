import Joi from 'joi'; // бібліотека валідації
const lecturePriceSchema = Joi.object({
  category: Joi.string().valid('Дорослі', 'Діти', 'Лекції').messages({
    'any.only': ` frontend validation error should be a one  of  Дорослі, Діти, Лекції) `,
  }),
  type: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add type`,
  }),
  theme: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add theme`,
  }),
  price: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add  price`,
  }),
});

export default lecturePriceSchema;
