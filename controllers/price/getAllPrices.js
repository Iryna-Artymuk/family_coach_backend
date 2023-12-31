import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const getAllPrices = async (req, res) => {
  const result = await Price.find({});
  res.json({ status: 'success',data: result });
};

export default asyncHandler(getAllPrices);
