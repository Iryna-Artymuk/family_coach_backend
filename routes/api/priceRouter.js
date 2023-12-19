import express from 'express';

import {
  getAllPrices,
  addPrice,
  deletePrice,
  updatePrice,
} from '../../controllers/price/index.js';

import {
  authentication,
  categoryValidation,
  isValidId,
  priceBodyValidation,
  verifyRoles,
} from '../../middlewars/index.js';
import ROLES_LIST from '../../config/roles_list.js';

const priceRouter = express.Router(); // create router

priceRouter.get('/', getAllPrices);
priceRouter.post(
  '/',
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  categoryValidation,
  priceBodyValidation,
  addPrice
);

priceRouter.put(
  '/:id',
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  isValidId,
  categoryValidation,
  priceBodyValidation,
  updatePrice
);

priceRouter.delete(
  '/:id',
  // authentication,
  // verifyRoles(ROLES_LIST.Admin),
  isValidId,
  categoryValidation,
  deletePrice
);

export default priceRouter;
