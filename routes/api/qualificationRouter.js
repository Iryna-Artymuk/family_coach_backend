import express from 'express';

import getAlldiplomas from '../../controllers/qualification/getAlldiplomas.js';

const qualificationRouter = express.Router(); // create router

qualificationRouter.get('/', getAlldiplomas);
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

export default qualificationRouter;
