import path from 'path';
import fs from 'fs/promises';

import asyncHandler from '../../decorators/acyncHandler.js';
import deleteOldImg from '../../helpers/deleteOldImg.js';
import Blog from '../../models/Blog.js';

const updatePostImageById = async (req, res, next) => {
  const { file } = req;
  const { id } = req.params;
  const { path: oldPath, filename } = file;

  //DELETE OLD IMAGE
  const { postImage: oldImgUrl } = await Blog.findOne({ _id: id });
  const oldPostImagePath = path.resolve('public', 'images', oldImgUrl);
  await deleteOldImg(oldPostImagePath, oldImgUrl);

  //SAVE NEW IMAGE
  // path to folder where to save file permanent
  const postImagePath = path.resolve('public', 'images', 'post images');

  // new path including filename in public folder
  const newPath = path.join(postImagePath, filename);

  // transfer file from temp  to public folder
  await fs.rename(oldPath, newPath);

  // path to file in DB it should be relating to server adress other part of path we add in app.js when allows static file
  const newPostURL = path.join('post images', filename);



  // update new  postImageURL in DB
  const result = await Blog.findByIdAndUpdate(
    id,
    { postImage: newPostURL },
    {
      new: true, // повернути оновлений контакт
      runValidators: true, // застосувати mongoose схему валідації
    }
  );

  res.status(200).json({ postImage: newPostURL });
};

export default asyncHandler(updatePostImageById);
