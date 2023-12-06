import asyncHandler from '../../decorators/acyncHandler.js';
import Price from '../../models/Price.js';

const addPrice = async (req, res) => {
  const result = await Price.create({ ...req.body });

  console.log('result: ', result);

  res.json({ data: result });
};

export default asyncHandler(addPrice);
