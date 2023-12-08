import { HttpError } from '../helpers/index.js';

const validateBody = schema => {
  const func = (req, res, next) => {
    console.log('validayebody: ', req.body);

    const { error } = schema.validate(req.body);

    if (error) {
      if (error) throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};

export default validateBody;
