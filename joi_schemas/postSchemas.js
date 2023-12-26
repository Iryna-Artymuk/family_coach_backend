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
    }).unknown(),
  },
  title: Joi.string().max(50).required().messages({
    'any.required': `frontend validation error check again  if you  add title`,
  }),
  description: Joi.string().max(300).required().messages({
    'any.required': `frontend validation error check again  if you  add description`,
  }),
  post: Joi.string().required().messages({
    'any.required': `frontend validation error check again  if you  add description`,
  }),

  postCategory: Joi.string()
    .valid('Саморозвиток', 'Мотивація', 'Відносини', 'Діти', 'Підлітки')
    .messages({
      'any.only': ` frontend validation error should be a one  of Саморозвиток, Мотивація, Відносини,Діти ,Підлітки,) `,
    }),
});

export default addPostSchema;
