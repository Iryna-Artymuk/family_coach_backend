import asyncHandler from '../../decorators/acyncHandler.js';
import HttpError from '../../helpers/httpError.js';


import path from 'path';

import deleteOldImg from '../../helpers/deleteOldImg.js';
import Blog from '../../models/Blog.js';

const deletePostById = async (req, res) => {
  const { id } = req.params;

  const result = await Blog.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(
      404,
      ` диплому з id:${id} не знайдено перевірте чи правильний id `
    );
  }

  // get  url to delete
  const urlToDelete = result.postImage;
  const oldImgtUrlPath = path.resolve('public', 'images', urlToDelete);

  await deleteOldImg(oldImgtUrlPath, urlToDelete);
  res.json({
    message: ` Diploma with id:${id} deleted successfully`,
  });
};

export default asyncHandler(deletePostById);
