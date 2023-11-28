import express from 'express';

import getAllBlogPosts from '../../controllers/blog/getAllBlogPost.js';
const blogRouter = express.Router(); // create router

blogRouter.get('/', getAllBlogPosts);
//router.get('/', authentication, getAllFeedbacks);

// router.get('/:contactId', authentication, isValidId, getContactById);

// router.post('/', authentication, vadidateAddContact, addContact);

// router.put(
//   '/:contactId',
//   authentication,
//   isValidId,
//   vadidateAddContact,
//   updateContactById
// );
// router.patch(
//   '/:contactId/favorite',
//   isValidId,
//   vadidateFavorite,
//   updateContactById
// );
// router.patch(
//   '/:contactId/avatars',
//   isValidId,
//   vadidateFavorite,
//   updateContactById
// );

// router.delete('/:contactId', authentication, isValidId, deleteContactById);

export default blogRouter;
