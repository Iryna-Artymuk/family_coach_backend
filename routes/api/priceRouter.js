import express from 'express';

import {
  getAdultPrice,
  getKidsPrice,
  updateKidsPrice,
  updateAdultPrice,
  getLecturePrice,
  updateLecturePrice,
} from '../../controllers/price/index.js';
import isValidId from '../../middlewars/isValidId.js';

const priceRouter = express.Router(); // create router

priceRouter.get(
  '/kidsPrice',

  getKidsPrice
);
priceRouter.get(
  '/adultPrice',

  getAdultPrice
);
priceRouter.get('/lecturePrice', getLecturePrice);

// priceRouter.get('/:contactId', authentication, isValidId, getContactById);

// priceRouter.post('/', authentication, vadidateAddContact, addContact);

// priceRouter.put(
//   '/kidsPrice/:id',
//   //   authentication,
//   isValidId,
//   //   vadidateAddContact,
//   updateKidsPrice
// );
priceRouter.put(
  '/adultPrice/:id',
  //   authentication,
  isValidId,
  //   vadidateAddContact,
  updateAdultPrice
);
priceRouter.put(
  '/kidsPrice/:id',
  //   authentication,
  isValidId,
  //   vadidateAddContact,
  updateKidsPrice
);
priceRouter.put(
  '/lecturePrice/:id',
  //   authentication,
  isValidId,
  //   vadidateAddContact,
  updateLecturePrice
);

export default priceRouter;
