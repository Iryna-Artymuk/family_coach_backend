import express from 'express';

import {
  getAllPrices,
  addPrice,
  deletePrice,
} from '../../controllers/price/index.js';
import isValidId from '../../middlewars/isValidId.js';
//import addPrice from '../../controllers/price/addPrice.js';

const priceRouter = express.Router(); // create router

priceRouter.get('/', getAllPrices);
priceRouter.post('/', addPrice);
priceRouter.delete('/', deletePrice);

export default priceRouter;
