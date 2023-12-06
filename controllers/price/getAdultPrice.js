import asyncHandler from '../../decorators/acyncHandler.js';
import AdultPrice from '../../models/AdultPrice.js';


const getAdultPrice = async (req, res) => {
  const result = await AdultPrice.find({});

  res.json({ data: result });
};

export default asyncHandler(getAdultPrice);
