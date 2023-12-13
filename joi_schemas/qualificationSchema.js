// import Joi from 'joi'; // бібліотека валідації
import Joi from 'joi';

const qualificationSchema = Joi.object({
  diplomaImg: Joi.any(),
});
export default qualificationSchema;
