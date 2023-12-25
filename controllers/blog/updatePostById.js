import asyncHandler from '../../decorators/acyncHandler.js';

import Blog from '../../models/Blog.js';

const updatePostById = async (req, res, next) => {
  const { id } = req.params;

  const updatePost= {
    ...req.body,
  };

  const result = await Blog.findOneAndUpdate(
    { _id: id }, // id
    { ...updatePost }, // те що треба обновити
    {
      new: true, // повернути оновлений контакт
      runValidators: true, // застосувати mongoose схему валідації
    }
  );

  res.status(200).json({
    status: 'success',
    data: result,
  });
};

export default asyncHandler(updatePostById);
