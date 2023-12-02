import Joi from 'joi'; // бібліотека валідації
const qualificationSchema = Joi.object({
  diplomaImg: {
    output: 'file',
  },
});

export default qualificationSchema;
