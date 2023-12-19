import validateBody from '../../../decorators/validateBody.js';
import Joi from 'joi'; // бібліотека валідації
import HttpError from '../../../helpers/httpError.js';
const categorySchema = Joi.string()
  .valid('Дорослі', 'Діти', 'Лекції')
  .messages({
    'any.only': ` frontend validation error should be a one  of  Дорослі, Діти, Лекції) `,
  });

const categoryValidation = (req, res, next) => {
  const { category } = req.body;
 

  if (!category) {
    next(HttpError(400, ' category validation,  missing fild category'));
  }
  const { error } = categorySchema.validate(category);

  if (error) {
    if (error) next(HttpError(400, `Category validation, ${error.message}`));
  }
  next();
};

export default categoryValidation;
