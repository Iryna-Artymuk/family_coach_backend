import express from 'express';
import getAllprice from '../../controllers/price/getAllprice.js';

const priceRouter = express.Router(); // create router

priceRouter.get('/', getAllprice);
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

export default priceRouter;
