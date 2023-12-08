import express from 'express';

import {
  getAllPrices,
  addPrice,
  deletePrice,
  updatePrice,
} from '../../controllers/price/index.js';

import {
  categoryValidation,
  isValidId,
  priceBodyValidation,
} from '../../middlewars/index.js';

const priceRouter = express.Router(); // create router

priceRouter.get('/', getAllPrices);
priceRouter.post('/', categoryValidation, priceBodyValidation, addPrice);

priceRouter.put(
  '/:id',
  categoryValidation,
  isValidId,
  priceBodyValidation,
  updatePrice
);

priceRouter.delete('/:id', categoryValidation, isValidId, deletePrice);

export default priceRouter;
