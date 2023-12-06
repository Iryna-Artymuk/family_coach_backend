import asyncHandler from '../../decorators/acyncHandler.js';
import KidsPrice from '../../models/KidsPrice.js';

const getKidsPrice = async (req, res) => {
  const result = await KidsPrice.find({});

  res.json({ data: result });
};

export default asyncHandler(getKidsPrice);
