import Joi from 'joi'; // бібліотека валідації
const addPostSchema = Joi.object({
  postImage: {
    filename: Joi.string().required(),
    path: Joi.string().required(),
    headers: Joi.object({
      'content-disposition': Joi.string().required(),
      'content-type': Joi.string()
        .valid('image/jpeg', 'image/jpg', 'image/png', 'image/JPG')
        .required(),
    })
      .unknown()
      
  },
  title: Joi.string().max(200).required().messages({
    'any.required': `frontend validation error check again  if you  add title`,
  }),
  description: Joi.string().max(500).required().messages({
    'any.required': `frontend validation error check again  if you  add description`,
  }),
  post: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add description`,
  }),

  category: Joi.string().valid('Сімя', 'Діти', 'Саморозвиток').messages({
    'any.only': ` frontend validation error should be a one  of  "Сім'я ", 'Діти', 'Саморозвиток') `,
  }),
});

export default addPostSchema;
