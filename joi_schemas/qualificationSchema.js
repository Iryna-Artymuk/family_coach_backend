// import Joi from 'joi'; // бібліотека валідації
import Joi from 'joi';

const qualificationSchema = Joi.object({
  file: Joi.any(),
});
export default qualificationSchema;
