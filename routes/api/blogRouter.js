import express from 'express';

import {
  getAllBlogPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
  updatePostImageById,
} from '../../controllers/blog/index.js';
import { isValidId, upload, vadidatePostBody } from '../../middlewars/index.js';

const blogRouter = express.Router(); // create router

blogRouter.get('/', getAllBlogPosts);

blogRouter.get('/:id', isValidId, getPostById);

blogRouter.post(
  '/',
  //   authentication,
  upload.single('postImage'),
  vadidatePostBody,
  addPost
);

blogRouter.put(
  '/:id',
  //authentication,
  isValidId,

  vadidatePostBody,
  updatePostById
);
blogRouter.patch(
  '/postImage/:id',
  //authentication,
  isValidId,
  upload.single('postImage'),
  //vadidatePostBody,
  updatePostImageById
);

blogRouter.delete(
  '/:id',
  // authentication,
  isValidId,
  deletePostById
);

export default blogRouter;
