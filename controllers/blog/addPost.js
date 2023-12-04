import asyncHandler from '../../decorators/acyncHandler.js';

import path from 'path';
import fs from 'fs/promises';

import Blog from '../../models/Blog.js';

const addPost = async (req, res,next) => {
  const { file } = req;

  const { path: oldPath, filename } = file;

  // path to folder where to save file permanent
  const postPath = path.resolve('public', 'images', 'post images');

  // new path including filename in public folder
  const newPath = path.join(postPath, filename);

  // transfer file from temp  to public folder
  await fs.rename(oldPath, newPath);

 
  // path to file in DB it should be relating to server adress other part of path we add in app.js when allows static file
  const postURL = path.join('post images', filename);

  const result = await Blog.create({
    ...req.body,
    postImage: postURL,
  });

  res.status(201).json(result);
};

export default asyncHandler(addPost);
