import express from 'express';

import {
  getAllBlogPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
  updatePostImageById,
} from '../../controllers/blog/index.js';
import {
  authentication,
  isValidId,
  upload,
  vadidatePostBody,
  verifyRoles,
} from '../../middlewars/index.js';
import ROLES_LIST from '../../config/roles_list.js';

const blogRouter = express.Router(); // create router

blogRouter.get('/', getAllBlogPosts);

blogRouter.get('/:id', isValidId, getPostById);

blogRouter.post(
  '/',
  // authentication,
  // verifyRoles(ROLES_LIST.ContentEditor, ROLES_LIST.Admin),
  upload.single('postImage'),
  vadidatePostBody,
  addPost
);

blogRouter.put(
  '/:id',
  authentication,
  verifyRoles(ROLES_LIST.ContentEditor, ROLES_LIST.Admin),
  isValidId,

  vadidatePostBody,
  updatePostById
);
blogRouter.patch(
  '/postImage/:id',
  authentication,
  verifyRoles(ROLES_LIST.ContentEditor, ROLES_LIST.Admin),
  isValidId,
  upload.single('postImage'),
  vadidatePostBody,
  updatePostImageById
);

blogRouter.delete(
  '/:id',
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  isValidId,
  deletePostById
);

export default blogRouter;
