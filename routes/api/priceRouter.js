import express from 'express';

import {
  getAllPrices,
  addPrice,
  deletePrice,
  updatePrice,
} from '../../controllers/price/index.js';
import isValidId from '../../middlewars/isValidId.js';
//import addPrice from '../../controllers/price/addPrice.js';

const priceRouter = express.Router(); // create router

priceRouter.get('/', getAllPrices);
priceRouter.post('/', addPrice);
priceRouter.delete('/', deletePrice);
priceRouter.put('/', updatePrice);

export default priceRouter;
