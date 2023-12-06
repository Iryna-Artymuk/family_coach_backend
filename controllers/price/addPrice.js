import asyncHandler from '../../decorators/acyncHandler.js';
import KidsPrice from '../../models/KidsPrice.js';
import Price from '../../models/Price.js';

const addPrice = async (req, res) => {
  const kidsPrice = await KidsPrice.find({});

  const result = await Price.create({
    kidsPrice: kidsPrice,
  });

  res.json({ data: result });
};

export default asyncHandler(addPrice);
