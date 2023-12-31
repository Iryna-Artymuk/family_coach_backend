import Joi from 'joi'; // бібліотека валідації
const updateImageSchema = Joi.object({
  postImage: {
    filename: Joi.string().required(),
    path: Joi.string().required(),
    headers: Joi.object({
      'content-disposition': Joi.string().required(),
      'content-type': Joi.string()
        .valid('image/jpeg', 'image/jpg', 'image/png', 'image/JPG')
        .required(),
    }).unknown(),
  },
});

export default updateImageSchema;
