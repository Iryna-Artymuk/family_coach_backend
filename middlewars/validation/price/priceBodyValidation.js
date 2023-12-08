import HttpError from '../../../helpers/httpError.js';
import { adultPriceSchema, kidsPriceSchema, lecturePriceSchema } from '../../../joi_schemas/index.js';



const priceBodyValidation = (req, res, next) => {
  const { category } = req.body;

  let schema = null;

  switch (category) {
    case 'Дорослі':
      schema = adultPriceSchema;
      break;
    case 'Діти':
      schema = kidsPriceSchema;
      break;
    case 'Лекції':
      schema = lecturePriceSchema;
      break;
    default:
      schema = null;
  }

  const validateResult = schema.validate(req.body);
  // console.log('validateResult: ', validateResult);
  const { error } = validateResult;

  if (error) throw HttpError(400, error.message);
  // якщо не буде всіх даних  error === true спрацює HttpError(400, validateResult.messages) і код перерветься спрацює функція обробки помилок
  //  error.message буде message з схеми валідації
  next();
};

export default priceBodyValidation;
