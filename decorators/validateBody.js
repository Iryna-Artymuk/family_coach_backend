import { HttpError } from '../helpers/index.js';

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    // console.log('req.body: ', req.body);

    if (error) {
      if (error) throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};

export default validateBody;
